<?php

namespace Drupal\tour_360\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\commerce_product\Entity\Product;

/**
 * Configure tour_360 settings for this site.
 */
class PlazoletaConfigForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected $uploadLocation = 'public://files_tour360/plazoleta/';

  /**
   * Constructs an ChannelForm object.
   *
   * File Usager Interface.
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
   * Name vocabulary
   */
  protected $vid = 'mundo';

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
    return 'tour_360_plazoleta_config';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['tour_360.plazoleta'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('tour_360.plazoleta');

    $form['description'] = [
      '#markup' => '<div><h1>Configuración de plazoleta</h1> <h3> id = 0-plazoleta</h3></div>',
    ];

    $form['isActive'] = [
      '#type' => 'checkbox',
      '#title' => 'World Active',
      '#default_value' => $config->get('isActive'),
    ];

    $form['name'] = [
      '#type' => 'textfield',
      '#title' => 'Name',
      '#default_value' => $config->get('name'),
      '#description' => 'Write the name for world',
      '#requiere' => TRUE,
    ];

    $form['icono'] = [
      '#title' => 'Menu icon',
      '#type' => 'managed_file',
      '#upload_location' => $this->uploadLocation,
      '#default_value' => $config->get('icono') ? [$config->get('icono')] : NULL,
      '#description' => 'Carge el icono que lleva en en menú',
      '#upload_validators' => [
        'file_validate_extensions' => ['png'],
      ],
    ];

    $form['#tree'] = TRUE;

    $form['fieldset_inicio'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Posicion inicial'),
      '#prefix' => '<div id="fieldset-inicio-wrapper">',
      '#suffix' => '</div>',
    ];

    $form['fieldset_inicio']['yaw_inicio'] = [
      '#type' => 'textfield',
      '#title' => 'yaw',
      '#default_value' => $config->get('yaw_inicio'),
      '#description' => 'escriba la posicion en X',
      '#requiere' => TRUE,
    ];

    $form['fieldset_inicio']['pitch_inicio'] = [
      '#type' => 'textfield',
      '#title' => 'pitch',
      '#default_value' => $config->get('pitch_inicio'),
      '#description' => 'escriba la posicion en Y',
      '#requiere' => TRUE,
    ];

    $form['fieldset_inicio']['fov_inicio'] = [
      '#type' => 'textfield',
      '#title' => 'fov',
      '#default_value' => $config->get('fov_inicio'),
      '#description' => 'escriba la posicion en Z',
      '#requiere' => TRUE,
    ];

    // Aqui comienza el de Salidas.
    $form['#tree'] = TRUE;

    $form['punto_salida_fieldset'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Puntos de salida'),
      '#prefix' => '<div id="punto-salida-fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    $name_field = $form_state->get('num_names');

    if (empty($name_field)) {
      $name_field = $config->get('num_names');
      if (empty($name_field)) {
        $name_field = $form_state->set('num_names', 1);
      }
      else {
        $form_state->set('num_names', $name_field);
      }
    }
    else {
      $form_state->set('num_names', $name_field);
    }

    $form['punto_salida_fieldset']['no_salida'] = [
      '#type' => 'checkbox',
      '#default_value' => $config->get('no_salida'),
      '#title' => 'Seleccione si no tiene puntos de salida',
    ];
    $checkSalida = ':input[name="punto_salida_fieldset[no_salida]"]';

    for ($i = 0; $i < $name_field; $i++) {
      $form['punto_salida_fieldset']['group_block_salida_' . $i] = [
        '#type' => 'details',
        '#title' => 'Grupo Salida #' . $i,
        '#collapsible' => TRUE,
        '#collapsed' => TRUE,
        '#attributes' => [
          'style' => 'background:#636161;',
        ],
        '#states' => [
          'visible' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
      $form['punto_salida_fieldset']['group_block_salida_' . $i]['yaw_exit' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Yaw de salida #' . $i,
        '#description' => 'escriba la posicion en X',
        '#default_value' => $config->get('yaw_exit' . $i),
        '#state' => [
          'required' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
      $form['punto_salida_fieldset']['group_block_salida_' . $i]['pitch_exit' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Pitch de salida #' . $i,
        '#description' => 'escriba la posicion en Y',
        '#default_value' => $config->get('pitch_exit' . $i),
        '#state' => [
          'required' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
      $form['punto_salida_fieldset']['group_block_salida_' . $i]['rotation_exit' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Rotacion de imagen #' . $i ,
        '#description' => 'Escriba los grados de rotacion o escriba 0 si no desea rotar la imagen',
        '#default_value' => $config->get('rotation_exit' . $i) ? $config->get('rotation_exit' . $i) : 0,
        '#state' => [
          'required' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
      $form['punto_salida_fieldset']['group_block_salida_' . $i]['target_exit' . $i] = [
        '#type' => 'select',
        '#title' => 'Selecciona el Mundo ' . $i,
        '#description' => 'Escriba el id del mundo que desea configurar en esta salida #' . $i,
        '#options' => [
          '0-plazoleta' => 'Plazoleta',
          '1-divertimente' => 'Divertimente',
          '2-arte' => 'Arte',
          '3-cuadernos' => 'Cuadernos',
          '4-escolar' => 'Escolar',
          '5-oficina' => 'Oficina',
          '6-colores' => 'Colores',
          '7_kiut' => 'Kiut',
        ],
        '#default_value' => $config->get('target_exit' . $i),
        '#state' => [
          'required' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
    }

    $form['punto_salida_fieldset']['actions']['add_name_salida'] = [
      '#type' => 'submit',
      '#value' => 'Agregue punto de Salida',
      '#submit' => ['::addOne'],
      '#ajax' => [
        'callback' => '::addmoreCallback',
        'wrapper' => 'punto-salida-fieldset-wrapper',
      ],
      '#states' => [
        'visible' => [
          $checkSalida => ['checked' => FALSE],
        ],
      ],
    ];
    if ($name_field > 1) {
      $form['punto_salida_fieldset']['actions']['remove_name_salida'] = [
        '#type' => 'submit',
        '#value' => 'Remueva el ultimo punto de Salida',
        '#submit' => ['::removeCallback'],
        '#ajax' => [
          'callback' => '::addmoreCallback',
          'wrapper' => 'punto-salida-fieldset-wrapper',
        ],
        '#states' => [
          'visible' => [
            $checkSalida => ['checked' => FALSE],
          ],
        ],
      ];
    }

    // Aqui comienda el de Productos.
    $form['#tree'] = TRUE;
    $form['punto_click_fieldset'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Puntos de Productos'),
      '#prefix' => '<div id="punto-click-fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    $num_click = $form_state->get('num_click');

    if (empty($num_click)) {
      $num_click = $config->get('num_click');
      if (empty($num_click)) {
        $num_click = $form_state->set('num_click', 1);
      }
      else {
        $form_state->set('num_click', $num_click);
      }
    }
    else {
      $form_state->set('num_click', $num_click);
    }

    $form['punto_click_fieldset']['no_click'] = [
      '#type' => 'checkbox',
      '#default_value' => $config->get('no_click'),
      '#title' => 'Seleccione si no tiene puntos de click',
    ];

    $checkClick = ':input[name="punto_click_fieldset[no_click]"]';

    for ($i = 0; $i < $num_click; $i++) {
      $form['punto_click_fieldset']['group_block_click_' . $i] = [
        '#type' => 'details',
        '#title' => 'Grupo Click #' . $i,
        '#collapsible' => TRUE,
        '#collapsed' => TRUE,
        '#attributes' => [
          'style' => 'background:#636161;',
        ],
        '#states' => [
          'visible' => [
            $checkClick => ['checked' => FALSE],
          ],
        ],
      ];

      $form['punto_click_fieldset']['group_block_click_' . $i]['yaw_click' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Yaw de salida #' . $i,
        '#description' => 'escriba la posicion en X',
        '#default_value' => $config->get('yaw_click' . $i),
        '#state' => [
          'required' => [
            $checkClick => ['checked' => FALSE],
          ],
        ],
      ];

      $form['punto_click_fieldset']['group_block_click_' . $i]['pitch_click' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Pitch de salida #' . $i,
        '#description' => 'escriba la posicion en Y',
        '#default_value' => $config->get('pitch_click' . $i),
        '#state' => [
          'required' => [
            $checkClick => ['checked' => FALSE],
          ],
        ],
      ];
      $form['punto_click_fieldset']['group_block_click_' . $i]['width_click' . $i] = [
        '#type' => 'number',
        '#title' => 'Tamaño del icono',
        '#default_value' => $config->get('width_click' . $i) ? $config->get('width_click' . $i) : 50,
        '#description' => 'Tamano del icono en piexeles "px"',
      ];

      $form['punto_click_fieldset']['group_block_click_' . $i]['title_click' . $i] = [
        '#type' => 'textfield',
        '#title' => 'Titulo de este click ' . $i,
        '#description' => 'Escriba el titulo de este punto de click#' . $i,
        '#default_value' => $config->get('title_click' . $i),
        '#state' => [
          'required' => [
            $checkClick => ['checked' => FALSE],
          ],
        ],
      ];

      $form['punto_click_fieldset']['group_block_click_' . $i]['position_title' . $i] = [
        '#type' => 'radios',
        '#title' => 'Position del titulo',
        '#default_value' => !empty($config->get('position_title' . $i)) ? $config->get('position_title' . $i) : 'right' ,
        '#options' => [
          'top' => 'Arriba',
          'right' => 'Derecha',
          'left' => 'Izquierda',
          'bottom' => 'Debajo',
        ],
      ];

    }

    $form['punto_click_fieldset']['actions']['add_name_click'] = [
      '#type' => 'submit',
      '#value' => 'Agregue punto de Link',
      '#submit' => ['::addOneClick'],
      '#ajax' => [
        'callback' => '::addmoreCallbackClick',
        'wrapper' => 'punto-click-fieldset-wrapper',
      ],
      '#states' => [
        'visible' => [
          $checkClick => ['checked' => FALSE],
        ],
      ],
    ];
    if ($num_click > 1) {
      $form['punto_click_fieldset']['actions']['remove_name_click'] = [
        '#type' => 'submit',
        '#value' => 'Remueva punto de link',
        '#submit' => ['::removeCallbackClick'],
        '#ajax' => [
          'callback' => '::addmoreCallbackClick',
          'wrapper' => 'punto-click-fieldset-wrapper',
        ],
        '#states' => [
          'visible' => [
            $checkClick => ['checked' => FALSE],
          ],
        ],
      ];
    }

    // Aqui comienza el de video.
    $form['fieldset_video'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Agregar Video'),
      '#prefix' => '<div id="fieldset-video-wrapper">',
      '#suffix' => '</div>',
    ];

    $form['fieldset_video']['no_video'] = [
      '#type' => 'checkbox',
      '#default_value' => $config->get('no_video'),
      '#title' => 'Seleccione si no tiene un punto de video',
    ];

    $checkVideo = ':input[name="fieldset_video[no_video]"]';

    $form['fieldset_video']['yaw_video'] = [
      '#type' => 'textfield',
      '#title' => 'yaw',
      '#default_value' => $config->get('yaw_video'),
      '#description' => 'escriba la posicion en X',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];

    $form['fieldset_video']['pitch_video'] = [
      '#type' => 'textfield',
      '#title' => 'pitch',
      '#default_value' => $config->get('pitch_video'),
      '#description' => 'escriba la posicion en Y',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];

    $form['fieldset_video']['url_video'] = [
      '#type' => 'textfield',
      '#title' => 'Url Video',
      '#default_value' => $config->get('url_video'),
      '#description' => 'Pegue la url del video de youtube,',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];
    $form['fieldset_video']['width_video'] = [
      '#type' => 'number',
      '#title' => 'width',
      '#default_value' => $config->get('width_video'),
      '#description' => 'width del video,',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];
    $form['fieldset_video']['height_video'] = [
      '#type' => 'number',
      '#title' => 'height',
      '#default_value' => $config->get('height_video'),
      '#description' => 'height de video ',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];

    $form['fieldset_video']['radius_video'] = [
      '#type' => 'number',
      '#title' => 'Radius',
      '#default_value' => !empty($config->get('radius_video')) ? $config->get('radius_video') : 1640,
      '#description' => 'Radius for default  1640',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];

    $form['fieldset_video']['rotateX_video'] = [
      '#type' => 'number',
      '#title' => 'Rotate X',
      '#default_value' => !empty($config->get('rotateX_video')) ? $config->get('rotateX_video') : 5,
      '#description' => 'Rotación en X, for default 5',
      '#states' => [
        'visible' => [
          $checkVideo => ['checked' => FALSE],
        ],
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    $config = $this->config('tour_360.plazoleta');

    $fieldsetInicio = $form_state->getValue('fieldset_inicio');
    $fieldsetSalida = $form_state->getValue('punto_salida_fieldset');
    $fieldsetClick = $form_state->getValue('punto_click_fieldset');
    $fieldsetVideo = $form_state->getValue('fieldset_video');

    foreach ($fieldsetInicio as $key => $val) {
      $config->set($key, $val)->save();
    }

    foreach ($fieldsetSalida as $key1 => $val1) {
      $flag = TRUE;
      if ($key1 == 'no_salida') {
        $config->set($key1, $val1)->save();
        $flag = ($val1 == 1) ? FALSE : TRUE;
      }
      if (!$flag) {
        break;
      }

      $pos = stripos($key1, 'group_block_salida_');
      if ($pos !== FALSE) {
        foreach ($val1 as $k1 => $v1) {
          $config->set($k1, $v1)->save();
        }
      }

    }

    foreach ($fieldsetClick as $key2 => $val2) {
      $flag = TRUE;
      if ($key2 == 'no_click') {
        $config->set($key2, $val2)->save();
        $flag = ($val2 == 1) ? FALSE : TRUE;
      }
      if (!$flag) {
        break;
      }

      $pos = stripos($key2, 'group_block_click_');
      if ($pos !== FALSE) {
        foreach ($val2 as $k2 => $v2) {
          $config->set($k2, $v2)->save();
        }
      }
    }

    foreach ($fieldsetVideo as $key3 => $val3) {
      $config->set($key3, $val3)->save();
    }

    $fid = $form_state->getValue('icono');
    $fid = reset($fid);
    $fileStorange = $this->entityTypeManager->getStorage('file');

    if (!empty($fid)) {
      $file = $fileStorange->load($fid);
      if (!empty($file)) {
        $this->fileUsage->add($file, 'icono', 'file', $fid, 1);
        $file->setPermanent();
      }
    }

    $config->set('idConfig', '0-plazoleta')
      ->set('isActive', $form_state->getValue('isActive'))
      ->set('num_names', $form_state->get('num_names'))
      ->set('num_click', $form_state->get('num_click'))
      ->set('name', $form_state->getValue('name'))
      ->set('icono', $fid)
      ->save();

    parent::submitForm($form, $form_state);

    \Drupal::service('cache_tags.invalidator')->invalidateTags(['plazoleta_cache']);

    $form_state->setRedirect('system.admin_config');
  }

  /**
   * {@inheritdoc}
   */
  public function addOne(array &$form, FormStateInterface $form_state) {
    $name_field = $form_state->get('num_names');
    $add_button = $name_field + 1;
    $form_state->set('num_names', $add_button);
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function addmoreCallback(array &$form, FormStateInterface $form_state) {
    $name_field = $form_state->get('num_names');
    return $form['punto_salida_fieldset'];
  }

  /**
   * {@inheritdoc}
   */
  public function removeCallback(array &$form, FormStateInterface $form_state) {
    $name_field = $form_state->get('num_names');
    if ($name_field > 1) {
      $remove_button = $name_field - 1;
      $form_state->set('num_names', $remove_button);
    }
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function addOneClick(array &$form, FormStateInterface $form_state) {
    $num_click = $form_state->get('num_click');
    $add_button_click = $num_click + 1;
    $form_state->set('num_click', $add_button_click);
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function addmoreCallbackClick(array &$form, FormStateInterface $form_state) {
    $num_click = $form_state->get('num_click');
    return $form['punto_click_fieldset'];
  }

  /**
   * {@inheritdoc}
   */
  public function removeCallbackClick(array &$form, FormStateInterface $form_state) {
    $num_click = $form_state->get('num_click');
    if ($num_click > 1) {
      $remove_button_click = $num_click - 1;
      $form_state->set('num_click', $remove_button_click);
    }
    $form_state->setRebuild();
  }

}
