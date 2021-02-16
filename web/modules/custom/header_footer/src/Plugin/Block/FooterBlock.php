<?php

namespace Drupal\header_footer\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Footer block block.
 *
 * @Block(
 *   id = "footer_block",
 *   admin_label = @Translation("Footer Block"),
 *   category = @Translation("Custom")
 * )
 */
class FooterBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $configFooter = \Drupal::service('utilities.service')->getFooterForm();

    $build['#theme'] = 'footer_block';
    $build['#data']['logo_footer'] = $configFooter['logo_footer'];
    $build['#data']['txt_legal'] = $configFooter['txt_legal'];
    $build['#data']['facebook'] = $configFooter['facebook'];
    $build['#data']['facebook'] = $configFooter['facebook'];
    $build['#data']['instagram'] = $configFooter['instagram'];
    $build['#data']['whatsApp'] = $configFooter['whatsApp'];
    $build['#data']['email'] = $configFooter['email'];
    $build['#data']['phone_num'] = $configFooter['phone_num'];
    $user =  \Drupal::service('current_user');
    $url = TRUE;
    if($user->id() == 0 ){
      $url= FALSE;
    }
    $build['#data']['url'] = $url;
    return $build;
  }

}
