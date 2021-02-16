<?php

namespace Drupal\header_footer\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Configure Header settings for this site.
 */
class HeaderForm extends ConfigFormBase {

  /**
   * Drupal\file\FileUsage\FileUsageInterface definition.
   *
   * @var \Drupal\file\FileUsage\FileUsageInterface
   */
  protected $fileUsage;

  /**
   * {@inheritdoc}
   */
  protected $uploadLocation = 'public://files_header/';

  /**
   * Constructs an ChannelForm object.
   *
   *   File Usage Inteface.
   *
   * @param \Drupal\file\FileUsage\FileUsageInterface $file_usage
   *   Entity Type Manager.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity query.
   */
  public function __construct(FileUsageInterface $file_usage,
  EntityTypeManagerInterface $entity_type_manager) {
    $this->fileUsage = $file_usage;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('file.usage'),
      $container->get('entity_type.manager'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'header_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['header_footer.header_settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('header_footer.header_settings');

    $form['logo_ppal'] = [
      '#title' => t('Imagen Principal'),
      '#type' => 'managed_file',
      '#upload_location' => $this->uploadLocation,
      '#default_value' => $config->get('logo_ppal') ? [$config->get('logo_ppal')] : NULL,
      '#description' => t('The uploaded image logo.'),
      '#upload_validators' => [
        'file_validate_extensions' => ['gif png jpg jpeg'],
      ],
    ];

    $form['txt_featured'] = [
      '#type' => 'textfield',
      '#title' => t('Texto Destacado del titulo'),
      '#default_value' => $config->get('txt_featured'),
    ];

    $form['txt_large'] = [
      '#type' => 'textfield',
      '#title' => t('Escriba el texto no destacado del titulo'),
      '#default_value' => $config->get('txt_large'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $fid = $form_state->getValue('logo_ppal');
    $fid = reset($fid);
    $fileStorange = $this->entityTypeManager->getStorage('file');

    if (!empty($fid)) {
      $file = $fileStorange->load($fid);
      if (!empty($file)) {
        $this->fileUsage->add($file, 'logo_ppal', 'file', $fid, 1);
        $file->setPermanent();
      }
    }

    $this->config('header_footer.header_settings')
      ->set('logo_ppal', $fid)
      ->set('txt_featured', $form_state->getValue('txt_featured'))
      ->set('txt_large', $form_state->getValue('txt_large'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
