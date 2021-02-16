<?php

namespace Drupal\tour_360\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Render\AttachmentsResponseProcessorInterface;
use Drupal\Core\Render\BareHtmlPageRenderer;
use Drupal\Core\Render\RendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Drupal\commerce_product\Entity\Product;
use Drupal\Core\Render\RenderContext;

/**
 * Returns responses for tour_360 routes.
 */
class PopUpController extends ControllerBase {
  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Drupal\Core\Render\AttachmentsResponseProcessorInterface definition.
   *
   * @var \Drupal\Core\Render\AttachmentsResponseProcessorInterface
   */
  protected $htmlResponseAttachmentsProcessor;

  /**
   * Drupal\Core\Render\RendererInterface definition.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * Symfony\Component\DependencyInjection\ContainerAwareInterface definition.
   *
   * @var \Symfony\Component\DependencyInjection\ContainerAwareInterface
   */
  protected $entityQuery;

  /**
   * Constructs a new FbiaPdfController object.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager,
    AttachmentsResponseProcessorInterface $html_response_attachments_processor,
    RendererInterface $renderer) {
    $this->entityTypeManager = $entity_type_manager;
    $this->htmlResponseAttachmentsProcessor = $html_response_attachments_processor;
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('html_response.attachments_processor'),
      $container->get('renderer')
    );
  }

  /**
   * Builds the response.
   */
  public function getPopUp($world, $type, $id) {
    $entity = [];
      if ($type == 'cat') {
        $entity = $this->entityTypeManager->getStorage('taxonomy_term')
          ->load($id);
      }
      elseif ($type == 'prod' || $type == 'prod_other') {
        $entity = $this->entityTypeManager->getStorage('commerce_product')
          ->load($id);
      }

    $build = [];
    if (!empty($entity) && $entity->getEntityTypeId() == 'commerce_product') {
      $build = $this->getProduct($entity);
    }
    elseif (!empty($entity) && $entity->getEntityTypeId() == 'taxonomy_term') {
      $build = $this->getListProduct($entity);
    }

    $wrapper_id = '';
    if (!empty($build)) {
      $bareHtmlPageRenderer = new BareHtmlPageRenderer($this->renderer, $this->htmlResponseAttachmentsProcessor);
      $build['#attached']['library'][]  = "ie_commerce/ie_commerce.library";
      if($world == '7_kiut'){
        $wrapper_id = ' id="kiut-angel"';
      }
      $build['#prefix'] = '<div' . $wrapper_id . ' class="pop-up-prod">';
      $build['#suffix'] = '</div>';
      $response = $bareHtmlPageRenderer->renderBarePage($build, 'titulo', 'page');

      return $response;
    }
    else {
      throw new NotFoundHttpException();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getProduct($entity) {
    $view_mode = 'default';
    $view_builder = $this->entityTypeManager->getViewBuilder($entity->getEntityTypeId());
    $element = $view_builder->view($entity, $view_mode, $entity->language()
      ->getId());

    $build = [
      '#theme' => 'pop_up',
      '#product' => $element,
      // '#cache' => [
      //   'tags' => ['pop_up_page'],
      // ],
    ];

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getListProduct($term) {



    $context = new RenderContext();
    /* @var \Drupal\Core\Cache\CacheableDependencyInterface $result */
    $list_entity = \Drupal::service('renderer')->executeInRenderContext($context, function() use ($term){
      return $this->entityTypeManager
      ->getStorage('commerce_product')
      ->getQuery()
      ->condition('field_categoria', $term->id())
      ->execute();
    });

    $response = [];
    if (!empty($list_entity)) {
      $entityListLoad = Product::loadMultiple($list_entity);

      foreach ($entityListLoad as $key => $value ) {
        $response[] = $this->getProduct($value);
      }
    }
    // var_export($list_entity);
    // exit;
    $build = [
      '#theme' => 'pop_up_list',
      '#list' => $response,
    ];

    return $build;
  }

}
