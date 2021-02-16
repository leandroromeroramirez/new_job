<?php

namespace Drupal\header_footer\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Configure Header &amp;amp; Footer settings for this site.
 */
class FooterForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected $uploadLocation = 'public://files_footer/';

  /**
   * Constructs an ChannelForm object.
   *
   * File Usage.
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
    return 'footer_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['header_footer.footer_settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('header_footer.footer_settings');

    $form['logo_footer'] = [
      '#title' => t('Imagen Footer'),
      '#type' => 'managed_file',
      '#upload_location' => $this->uploadLocation,
      '#default_value' => $config->get('logo_footer') ? [$config->get('logo_footer')] : NULL,
      '#description' => t('The uploaded image logo.'),
      '#upload_validators' => [
        'file_validate_extensions' => ['gif png jpg jpeg'],
      ],
    ];

    $form['txt_legal'] = [
      '#type' => 'textarea',
      '#title' => t('Escriba el texto legal'),
      '#default_value' => $config->get('txt_legal'),
    ];

    $form['facebook'] = [
      '#type' => 'textfield',
      '#title' => t('Escriba la url de la fan page de Facebook'),
      '#default_value' => $config->get('facebook'),
    ];

    $form['instagram'] = [
      '#type' => 'textfield',
      '#title' => t('Escriba la url de la fan page de Instagram'),
      '#default_value' => $config->get('instagram'),
    ];

    $form['whatsApp'] = [
      '#type' => 'number',
      '#title' => t('Numero telefonico que parecera en los contactos, Agrege el indicativo (57) sin paréntesis'),
      '#default_value' => $config->get('whatsApp'),
    ];

    $form['email'] = [
      '#type' => 'textfield',
      '#title' => t('Escriba el email de contacto'),
      '#default_value' => $config->get('email'),
    ];

    $form['phone_num'] = [
      '#type' => 'textfield',
      '#title' => t('Numero telefonico que parecera en los contactos, Agrege el indicativo (57)'),
      '#default_value' => $config->get('phone_num'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $fid = $form_state->getValue('logo_footer');
    $fid = reset($fid);
    $fileStorange = $this->entityTypeManager->getStorage('file');

    if (!empty($fid)) {
      $file = $fileStorange->load($fid);
      if (!empty($file)) {
        $this->fileUsage->add($file, 'logo_footer', 'file', $fid, 1);
        $file->setPermanent();
      }
    }

    $this->config('header_footer.footer_settings')
      ->set('logo_footer', $fid)
      ->set('txt_legal', $form_state->getValue('txt_legal'))
      ->set('facebook', $form_state->getValue('facebook'))
      ->set('instagram', $form_state->getValue('instagram'))
      ->set('whatsApp', $form_state->getValue('whatsApp'))
      ->set('email', $form_state->getValue('email'))
      ->set('phone_num', $form_state->getValue('phone_num'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
