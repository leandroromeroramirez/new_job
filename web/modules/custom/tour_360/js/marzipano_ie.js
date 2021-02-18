
'use strict';

(function ($, Drupal, drupalSettings) {

  // 'use strict';

  // Drupal.behaviors.tour360 = {
  //   attach: function (context, drupalSettings) {
  var _document = document;
  var _window = window;

  var Marzipano = _window.Marzipano;
  var bowser = _window.bowser;
  var screenfull = _window.screenfull;
  // var data = _window.APP_DATA_MARZIPANO;
  var data = JSON.parse(drupalSettings.tour_360.data);
  // Grab elements from DOM.
  var panoElement = _document.querySelector('#pano');
  var sceneNameElement = _document.querySelector('#titleBar .sceneName');
  var sceneListElement = _document.querySelector('#sceneList');
  var sceneElements = _document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = _document.querySelector('#sceneListToggle');
  var autorotateToggleElement = _document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = _document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (_window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        _document.body.classList.remove('mobile');
        _document.body.classList.add('mobile');
      } else {
        _document.body.classList.remove('mobile');
        _document.body.classList.add('mobile');
      }
    };
    var mql = _window.matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    _document.body.classList.add('mobile');
  }

  // Detect whether we are on a touch device.
  _document.body.classList.add('no-touch');
  _window.addEventListener('touchstart', function () {
    _document.body.classList.remove('no-touch');
    _document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    _document.body.classList.add('tooltip-fallback');
  }
  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function (data) {
    var urlPrefix = "/modules/custom/tour_360/renders";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);
    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    if (data.linkHotspots) {
      data.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
    }

    // Create info hotspots.
    if (data.infoHotspots) {
      data.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
    }


    // Create video hotspots.
    if (data.videoHotspots) {
      var container = scene.hotspotContainer();
      var element = createVideoHotspotElement(data.videoHotspots);
      // var rotatex = ;
      // console.log(rotatex);
      var _radius = parseInt(data.videoHotspots.radius);
      container.createHotspot(element, { yaw: data.videoHotspots.yaw, pitch: data.videoHotspots.pitch },
        { perspective: { radius: _radius, extraTransforms: 'rotateX(' + data.videoHotspots.rotatex +'deg)'} });

    }

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    _document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    _document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!_document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function (scene) {
    var el = _document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function () {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (_document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // // DOM elements for view controls.
  // var viewUpElement = _document.querySelector('#viewUp');
  // var viewDownElement = _document.querySelector('#viewDown');
  // var viewLeftElement = _document.querySelector('#viewLeft');
  // var viewRightElement = _document.querySelector('#viewRight');
  // var viewInElement = _document.querySelector('#viewIn');
  // var viewOutElement = _document.querySelector('#viewOut');

  // // Dynamic parameters for controls.
  // var velocity = 0.7;
  // var friction = 3;

  // // Associate view controls with elements.
  // var controls = viewer.controls();
  // controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
  // controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
  // controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
  // controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
  // controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
  // controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  //Crear un video Hostpost
  function createVideoHotspotElement(hostpot) {
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    var iframe = _document.createElement('iframe');
    iframe.setAttribute('width', hostpot.width);
    iframe.setAttribute('height', hostpot.height);
    iframe.setAttribute('src', hostpot.url);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    wrapper.appendChild(iframe);

    return wrapper;
  }

  // Crear un Hotspot Link
  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = _document.createElement('img');
    icon.src = 'modules/custom/tour_360/images/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function () {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = _document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  // Crear un HotspotInfo
  function createInfoHotspotElement(hotspot) {
    var _widthicon = hotspot.width + "px";
    var _widthFont = (hotspot.width - 10) + "px";
    // Create wrapper element to hold icon and tooltip.
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    var iconWrapper = _document.createElement('div');
    iconWrapper.classList.add('info-hotspot-header');
    iconWrapper.classList.add('pop-up-ie');
    var id = hotspot.type == 'cat' ? hotspot.idterm : hotspot.idprod;
    var url = '/pop-up/' + hotspot.idconfig + '/' + hotspot.type + '/' + id;
    iconWrapper.setAttribute('data-href', url);

    iconWrapper.classList.add('wrapper-radar');
    iconWrapper.classList.add('tool-tip');
    iconWrapper.setAttribute('data-toggle', "tooltip");
    iconWrapper.setAttribute('data-placement', hotspot.position);
    iconWrapper.setAttribute('title', hotspot.title);
    iconWrapper.style.width = _widthicon;
    iconWrapper.style.height = _widthicon;
    iconWrapper.style.fontSize = _widthFont;
    for (let index = 0; index < 4; index++) {
      var radar = _document.createElement('div');
      radar.classList.add('radar');
      iconWrapper.appendChild(radar);
    }
    wrapper.appendChild(iconWrapper);

    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
      'wheel', 'mousewheel'];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  $(_document).bind('cbox_cleanup', function(){
    cartRefresh();
  });

  $(_document).bind('cbox_complete', function(){
    let $iframe = $('#cboxContent').find('#cboxLoadedContent iframe');
    let src_iframe = $iframe.attr("src");
    $iframe.on('load', function(){
      let $cart_form = $iframe.contents().find(".commerce-order-item-add-to-cart-form");
      $cart_form.submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: $(this).attr('action'),
          data: $(this).serialize(),
        }).done(function() {
          cartRefresh();
          $iframe.attr('src', src_iframe);
        });
      });
    })
  });

  function cartRefresh() {
    $.get("/api/ajax/refresh-cart", function(data, status){
      let $cart_block = $('#header .navbar #block-ordertotalcommerceblock'),
          $count_element = $cart_block.find('.container-order-total__counter span'),
          $price_element = $cart_block.find('.container-order-total__price span');
      if (status == 'success') {
        $count_element.text(data.count_items);
        $price_element.text(data.cart_price);

      }
    });
  }

  // Display the initial scene.
  switchScene(scenes[0]);

  Drupal.behaviors.tour360 = {
    attach: function (context, drupalSettings) {
      $('.pop-up-ie', context).once('openPopUp').each(function () {
        $(this).on('click', function () {
          $.colorbox({
            width: "80%",
            height: "80%",
            rel:'nofollow',
            iframe: true,
            href: $(this).data('href'),
          });
        });
        // $('[data-toggle="tooltip"]').tooltip();
      });
    }
  };

  }) (jQuery, Drupal, drupalSettings);
