<?php

namespace Drupal\header_footer\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Header &amp; Footer routes.
 */
class HeaderFooterController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
