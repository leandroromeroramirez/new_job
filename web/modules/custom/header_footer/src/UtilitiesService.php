<?php

namespace Drupal\header_footer;

use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * {@inheritdoc}
 */
class UtilitiesService {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Constructs an UtilitiesService object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public function getHeaderForm() {
    $config = \Drupal::config('header_footer.header_settings');
    $response = [];
    $response['logo_ppal'] = $this->load($config->get('logo_ppal'));
    $response['txt_featured'] = $config->get('txt_featured');
    $response['txt_large'] = $config->get('txt_large');

    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function getFooterForm() {
    $config = \Drupal::config('header_footer.footer_settings');
    $response = [];
    $response['logo_footer'] = $this->load($config->get('logo_footer'));
    $response['txt_legal'] = $config->get('txt_legal');
    $response['facebook'] = $config->get('facebook');
    $response['instagram'] = $config->get('instagram');
    $response['whatsApp'] = $config->get('whatsApp');
    $response['email'] = $config->get('email');
    $response['phone_num'] = $config->get('phone_num');

    return $response;
  }

  /**
   * {@inheritdoc}
   */
  private function load($fid) {
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

}
