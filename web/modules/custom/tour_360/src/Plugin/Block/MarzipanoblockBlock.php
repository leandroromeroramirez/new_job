<?php

namespace Drupal\tour_360\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\colorbox\ElementAttachmentInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a marzipanoblock block.
 *
 * @Block(
 *   id = "tour_360_marzipanoblock",
 *   admin_label = @Translation("MarzipanoBlock"),
 *   category = @Translation("Custom")
 * )
 */
class MarzipanoblockBlock extends BlockBase implements ContainerFactoryPluginInterface  {

  /**
   * Constructs an ImageFormatter object.
   *
   * @param string $plugin_id
   *   The plugin_id for the formatter.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Field\FieldDefinitionInterface $field_definition
   *   The definition of the field to which the formatter is associated.
   * @param \Drupal\colorbox\ElementAttachmentInterface $attachment
   *   Allow the library to be attached to the page.
   */
  public function __construct( array $configuration, $plugin_id, $plugin_definition,
    ElementAttachmentInterface $attachment) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->attachment = $attachment;

  }


  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('colorbox.attachment'),

    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $module_handler = \Drupal::service('module_handler');
    $module_path = $module_handler->getModule('tour_360')->getPath();
    $data = \Drupal::service('tour_360.utilities')->getDataHtml();

    $build['content'] = [
      '#theme' => 'marzipano_theme',
      '#data' => $data,
      '#path' => $module_path,
      '#attached' => [
        'library' => [
          'tour_360/tour_360.marzipano_ie',
          'colorbox/colorbox'
        ]
      ],
    ];

    return $build;
  }

}
