<?php

namespace Drupal\header_footer\Plugin\Block;

use Composer\Factory;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a header block block.
 *
 * @Block(
 *   id = "header_block",
 *   admin_label = @Translation("Header Block"),
 *   category = @Translation("Custom")
 * )
 */
class HeaderBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $configHeader = $theme_active = \Drupal::service('utilities.service')->getHeaderForm();

    $build['#theme'] = 'header_block';
    $build['#data']['logo'] = $configHeader['logo_ppal'];
    $build['#data']['txt_featured'] = $configHeader['txt_featured'];
    $build['#data']['txt_large'] = $configHeader['txt_large'];
    $user =  \Drupal::service('current_user');
    $url = TRUE;
    if($user->id() == 0 ){
      $url= FALSE;
    }
    $build['#data']['url'] = $url;
    return $build;
  }

}
