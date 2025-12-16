(function($) {

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var jQuerywindow = jQuery(window),
    jQuerydocument = jQuery(document),
    jQuerybody = jQuery('body');

//Check if function exists
jQuery.fn.exists = function () {
  return this.length > 0;
};


/*------------------------------------
  HT PreLoader
--------------------------------------*/
function preloader() {
   jQuery('#ht-preloader').fadeOut();
};


/*------------------------------------
  HT menu
--------------------------------------*/
function menu() {  
 jQuery('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!jQuery(this).next().hasClass('show')) {
    jQuery(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var jQuerysubMenu = jQuery(this).next(".dropdown-menu");
  jQuerysubMenu.toggleClass('show');

  jQuery(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    jQuery('.dropdown-submenu .show').removeClass("show");
  });

  return false;
});
};

/*------------------------------------
  HT Counter
--------------------------------------*/
function counter() {  
  var elementSelector = jQuery('.count-number');
    elementSelector.each(function(){
        elementSelector.appear(function(e) {
            var el = this;
            var updateData = jQuery(el).attr("data-count");
            var od = new Odometer({
                el: el,
                format: 'd',
                duration: 2000
            });
            od.update(updateData);
        });
    });
};



/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var pxShow = 300,
    goTopButton = jQuery(".scroll-top")
    // Show or hide the button
  if (jQuery(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
  jQuery(window).on('scroll', function () {
    if (jQuery(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
    } else {
      goTopButton.removeClass('scroll-visible')
    }
  });
  jQuery('.scroll-top').on('click', function (e) {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 0);
    return false;
  });
};


/*------------------------------------------
  HT Text Color, Background Color And Image
---------------------------------------------*/
function databgcolor() {
    jQuery('[data-bg-color]').each(function(index, el) {
     jQuery(el).css('background-color', jQuery(el).data('bg-color'));  
    });
    jQuery('[data-text-color]').each(function(index, el) {
     jQuery(el).css('color', jQuery(el).data('text-color'));  
    });
    jQuery('[data-bg-img]').each(function() {
     jQuery(this).css('background-image', 'url(' + jQuery(this).data("bg-img") + ')');
    });
};


/*------------------------------------
  HT Activeclass
--------------------------------------*/
function activeclass() {
    jQuery('.service-item').mouseenter(function() {
        jQuery('.service-item.service-active').removeClass('service-active');
        jQuery(this).removeClass('.service-item').addClass('service-active');
    });

    jQuery('.service-list').each(function() {
        if (jQuery(this).find('.service-item.style-3:nth-child(3)').length > 0) {
            jQuery(this).find('.service-item.style-3:nth-child(3)').addClass('active');
        }
    });

    jQuery('.service-list .service-item.style-3').hover(function() {
        if (jQuery(this).parents('.service-list').length > 0) {
            jQuery(this).parents('.service-list').find('.service-item.style-3').removeClass('active');
            jQuery(this).addClass('active');
        }
    });

    jQuery('.service-item.style-1').mouseenter(function() {
        jQuery('.service-item.style-1.active').removeClass('active');
        jQuery(this).removeClass('.service-item.style-1').addClass('active');
    });
};

/*------------------------------------
  HT ProgressBar
--------------------------------------*/
  function progressbar() {
    var progressBar = jQuery('.progress');
    if(progressBar.length) {
      progressBar.each(function () {
        var Self = jQuery(this);
        Self.appear(function () {
          var progressValue = Self.data('value');

          Self.find('.progress-bar').animate({
            width:progressValue+'%'           
          }, 1000);
        });
      })
    }
};

/*------------------------------------
  HT Countdown
--------------------------------------*/
function countdown() {
  jQuery('.countdown').each(function () {
    var jQuerythis = jQuery(this),
      finalDate = jQuery(this).data('countdown');
    jQuerythis.countdown(finalDate, function (event) {
      jQuery(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
    });
  });
};


/*------------------------------------
  HT Contact Form
--------------------------------------*/
function contactform() { 
    // when the form is submitted
    jQuery('#contact-form, #main-form').on('submit', function (e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
        var url = "php/contact.php";

        // POST values in the background the the script URL
        jQuery.ajax({
            type: "POST",
            url: url,
            data: jQuery(this).serialize(),
            success: function (data)
            {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the 
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            
            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
                // inject the alert to .messages div in our form
                jQuery('#contact-form, #main-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
                // empty the form
                jQuery('#contact-form, #main-form')[0].reset();
            }
          }
        });
        return false;
    }
 })   
};

/*------------------------------------
  HT btnproduct
--------------------------------------*/
function btnproduct() {
  jQuery('.btn-product-up').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number(jQuery(this).next().val());
    if (numProduct > 1) jQuery(this).next().val(numProduct - 1);
  });
  jQuery('.btn-product-down').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number(jQuery(this).prev().val());
    jQuery(this).prev().val(numProduct + 1);
  }); 
};


/*------------------------------------
  HT tilt
--------------------------------------*/
function tilt() { 
  jQuery(".portfolio-item").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    scale: 1.02
  });
};

/*------------------------------------
  HT Window load and functions
--------------------------------------*/
jQuery(document).ready(function() {    
    menu(),
    counter(),
    scrolltop(),
    databgcolor(),
    activeclass(),
    progressbar(),
    countdown(),
    contactform(),
    btnproduct(),
    tilt();
});
    
jQuery(window).on('load', function() {
    preloader();
});

})(jQuery);