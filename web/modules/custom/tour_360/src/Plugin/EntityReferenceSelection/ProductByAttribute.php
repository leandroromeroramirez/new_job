<?php

namespace Drupal\tour_360\Plugin\EntityReferenceSelection;

use Drupal\Core\Entity\Plugin\EntityReferenceSelection\DefaultSelection;

/**
 * Provides specific access control for the node entity type.
 *
 * @EntityReferenceSelection(
 *   id = "custom:product_by_attribute",
 *   label = @Translation("Attribute Product"),
 *   entity_types = {"commerce_product"},
 *   group = "custom",
 *   weight = 3
 * )
 */
class ProductByAttribute extends DefaultSelection {

  /**
   * {@inheritdoc}
   */
  protected function buildEntityQuery($match = NULL, $match_operator = 'CONTAINS') {
    $products_ids = \Drupal::service('tour_360.utilities')->getProductKuit();
    $query = parent::buildEntityQuery($match, $match_operator);
    if (!empty($products_ids)) {
      $field_name = "product_id";
      $query->condition($field_name, $products_ids, 'IN');
    }


    return $query;
  }

}
