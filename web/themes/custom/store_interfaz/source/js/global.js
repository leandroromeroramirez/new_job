/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.store_interfaz = {
    attach: function (context, settings) {
      var current = location.pathname;
      $('.menu-left a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
          $this.addClass('active');
        }
      })
    }
  };
  Drupal.behaviors.footer_mobile = {
    attach: function (context, settings) {
      $(".btn-mobile-menu", context).once('footerS').each(function () {
        $(this).on('click', function () {
          $(".btn-mobile-menu").toggleClass("translate-icon");
          $(".menu-ds-mobile").slideToggle();
        });
      });
    }
  };

  Drupal.behaviors.add_item_cart = {
    attach: function (context, settings) {
      //   Create a function
      $(".button--add-to-cart").click(function (event) {
        $(this).addClass("w40");
      });
    }
  };


  Drupal.behaviors.add_class_back = {
    attach: function (context, settings) {
      //   Create a function
      $('.form-check-input').change(function(){
        if($(this).is(":checked")) {
            $('.form-check-input').addClass('xxxxxxx');
        } else {
            $('.form-check-input').removeClass('xxxxxxx');
        }
    });
    }
  };




})(jQuery, Drupal);
