<?php

namespace Drupal\tour_360\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Config\ImmutableConfig;
use PHP_CodeSniffer\Standards\Squiz\Sniffs\ControlStructures\ForEachLoopDeclarationSniff;

/**
 * {@inheritdoc}
 */
class TourUtilitiesService {

  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;


  /**
   * Constructs an UtilitiesService object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager,
    ConfigFactoryInterface $config_factory) {
    $this->entityTypeManager = $entity_type_manager;
    $this->configFactory = $config_factory;
  }



  /**
   * {@inheritdoc}
   */
  private function loadImage($fid) {
    $path = "";
    if (!empty($fid)) {
      $fileStorange = $this->entityTypeManager->getStorage('file');
      $file = $fileStorange->load($fid);
      if (!empty($file)) {
        $path = file_create_url($file->getFileUri());
      }
    }
    return $path;
  }

  /**
   * {@inheritdoc}
   */
  public function createData() {
    $response = [];
    $listaConfig = [
      0 => 'tour_360.plazoleta',
      1 => 'tour_360.divertimente',
      2 => 'tour_360.arte',
      3 => 'tour_360.cuadernos',
      4 => 'tour_360.escolar',
      5 => 'tour_360.oficinas',
      6 => 'tour_360.colores',
      7 => 'tour_360.kuit',
    ];
    $arrayScenes = [];
    for ($i = 0; $i < count($listaConfig); $i++) {
      if (!empty($this->createScene($listaConfig[$i]))) {
        $arrayScenes[$i] = $this->createScene($listaConfig[$i]);
      }
    }

    $response = [
      "scenes" => $arrayScenes,
      "name" => "Mundo Norma",
      "settings" => [
        "mouseViewMode" => "drag",
        "autorotateEnabled" => TRUE,
        "fullscreenButton" => TRUE,
        "viewControlButtons" => TRUE,
      ],
    ];

    return json_encode($response);
  }

  /**
   * {@inheritdoc}
   */
  public function createScene(string $idFormConfig) {
    $response = [];
    $config = $this->configFactory->get($idFormConfig);
    if (!empty($config)) {
      if ($config->get('isActive') == 1) {
        $response = [
          "id" => $config->get('idConfig'),
          "name" => $config->get('name'),
          "levels" => [
            [
              "tileSize" => 256,
              "size" => 256,
              "fallbackOnly" => TRUE,
            ],
            [
              "tileSize" => 512,
              "size" => 512,
            ],
            [
              "tileSize" => 512,
              "size" => 1024,
            ],
            [
              "tileSize" => 512,
              "size" => 2048,
            ],
          ],
          "faceSize" => 1500,
          "initialViewParameters" => [
            "yaw" => floatval($config->get('yaw_inicio')),
            "pitch" => floatval($config->get('pitch_inicio')),
            "fov" => floatval($config->get('fov_inicio')),
          ],
          "linkHotspots" => $this->getLink($config),
          "infoHotspots" => $this->getInfo($config),
          "videoHotspots" => $this->getVideo($config),
        ];
      }

    };

    return $response;
  }

  /**
   * {@inheritdoc}
   */
  private function getLink(ImmutableConfig $config) {
    $response = [];

    if ($config->get('no_salida') == 0) {
      for ($i = 0; $i < $config->get('num_names'); $i++) {
        $response[] = [
          "yaw" => floatval($config->get('yaw_exit' . $i)),
          "pitch" => floatval($config->get('pitch_exit' . $i)),
          "rotation" => floatval($config->get('rotation_exit' . $i)),
          "target" => $config->get('target_exit' . $i),
        ];
      }

    };
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  private function getInfo(ImmutableConfig $config) {
    $response = [];

    if ($config->get('no_click') == 0) {
      for ($i = 0; $i < $config->get('num_click'); $i++) {
        $response[$i] = [
          "yaw" => floatval($config->get('yaw_click' . $i)),
          "pitch" => floatval($config->get('pitch_click' . $i)),
          "width" => $config->get('width_click' . $i),
          "title" => $config->get('title_click' . $i),
          "position" => $config->get('position_title' . $i),
          "type" => $config->get('type_click' . $i),
          "idterm" => $config->get('term_click' . $i),
          "idprod" => (!empty($config->get('prod_click' . $i)) ? $config->get('prod_click' . $i) : $config->get('prod_click_anything' . $i)),
          "idconfig" => $config->get('idConfig'),
        ];
      };
    }
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  private function getVideo(ImmutableConfig $config) {
    $response = [];

    if ($config->get('no_video') == 0) {
      $response = [
        "yaw" => floatval($config->get('yaw_video')),
        "pitch" => floatval($config->get('pitch_video')),
        "url" => $config->get('url_video'),
        "width" => $config->get('width_video'),
        "height" => $config->get('height_video'),
        "radius" => $config->get('radius_video'),
        "rotatex" => $config->get('rotateX_video')
      ];
    }
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function getDataHtml() {
    $listaConfig = [
      0 => 'tour_360.plazoleta',
      1 => 'tour_360.kuit',
      2 => 'tour_360.cuadernos',
      3 => 'tour_360.colores',
      4 => 'tour_360.arte',
      5 => 'tour_360.escolar',
      6 => 'tour_360.divertimente',
      7 => 'tour_360.oficinas',
    ];
    $arrayScenes = [];
    for ($i = 0; $i < count($listaConfig); $i++) {
      if (!empty($this->createScene($listaConfig[$i]))) {
        $arrayScenes[$i] = $this->createHtml($listaConfig[$i]);
      }
    }
    return $arrayScenes;
  }

  /**
   * {@inheritdoc}
   */
  private function createHtml(string $idFormConfig) {
    $response = [];
    $config = $this->configFactory->get($idFormConfig);
    if (!empty($config)) {
      if ($config->get('isActive') == 1) {
        $response = [
          "id" => $config->get('idConfig'),
          "name" => $config->get('name'),
          "url_image" => $this->loadImage($config->get('icono')),
        ];
      }
    }

    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function getProductKuit() {
    $productAttributeId = \Drupal::entityTypeManager()
        ->getStorage('commerce_product_attribute_value')
        ->getQuery()
        ->condition('attribute', 'marca_cuaderno')
        ->condition('name', 'KIUT')
        ->execute();

    $idAtribute = reset($productAttributeId);

    $productVariation = \Drupal::entityTypeManager()->getStorage('commerce_product_variation')->loadByProperties(['attribute_marca_cuaderno' => $idAtribute]);

    $products_ids = [];
    foreach ($productVariation as $key => $value) {
      $products = $value->product_id->referencedEntities();
      $product = reset($products);
      if ($product && !in_array($product->id(), $products_ids) ) {
        $products_ids[]= $product->id();
      }
    }



    return $products_ids;
  }

}
