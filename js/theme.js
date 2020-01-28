/*! Wexim Theme JS - v1.0.0 */

$ = jQuery.noConflict();

$(window).on("load", function () {

    /* ===================================
     Loading Timeout
     ====================================== */

    "use strict";
    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 1000);

    $('div:not(#elementor-preview) .owl-carousel').trigger('refresh.owl.carousel');

});



jQuery(function ($) {


    "use strict";

    /*==============================================================*/
    // Side Menu
    /*==============================================================*/

    $(".right-side-nav").menu();
    $(".sliding-menu li a.nav").parent("li").addClass("submen-dec");

    $("a:not([href]):not([tabindex])").parent('li').css("display", "none");


    if ($(".nav-holder").length) {
        $(".sidenav-toggler").on("click", function () {
            $(".nav-holder").toggleClass("active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".nav-holder").removeClass("active"), $(this).fadeOut(200)
        }), $(".sliding-menu a.scroll").on("click", function () {
            $(".nav-holder").removeClass("active"), $("#close_side_menu").fadeOut(200)
        }), $("#btn_sideNavClose").on("click", function () {
            $(".nav-holder").removeClass("active"), $("#close_side_menu").fadeOut(200)
        });
    }

    $("img").each(function() {
        var img = $(this);
        if (!img.attr("alt") || img.attr("alt") == null)
            img.attr("alt", "image");
    });


    /*==============================================================*/
    // Scroll
    /*==============================================================*/


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


    $(".dropdown li").on('mouseenter mouseleave', function (e) {
        if ($('ul', this).length) {
            var elm = $('ul:first', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docH = $(".container").height();
            var docW = $(window).width();

            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('edge');
            } else {
                $(this).removeClass('edge');
            }
        }
    });

    // handle links with @href started with '#' only
    $(document).on('click', '.scroll-item', function (e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });

    $('.widget').find('.menu-item-has-children > a, .page_item_has_children > a, .cat-parent > a').after('<span class="wexim-accordion-nav"><i class="fa fa-chevron-down"></i></span>');

    $('.widget').on('click', '.wexim-accordion-nav', function () {
        $(this).closest('li').find('ul.sub-menu:first, ul.children:first').slideToggle('fast').parent().toggleClass('active');
    });

    /*==============================================================*/
    // Sticky Header
    /*==============================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 250) { // Set position from top to add class
            $('header.sticky').addClass('header-appear');
        }
        else {
            $('header.sticky').removeClass('header-appear');
        }
    });


    /*==============================================================*/
    // Comment Validation - START CODE
    /*==============================================================*/

    $(".wexim-comment-button").on("click", function () {
        var fields;
        fields = "";
        if ($(this).parent().parent().find('#author').length == 1) {
            if ($(".comment-form").find("#author").val().length == 0 || $(".comment-form").find("#author").val().value == '') {
                fields = '1';
                $(".comment-form").find("#author").addClass("inputerror");
            }
        }
        if ($(this).parent().parent().find('#comment').length == 1) {
            if ($(".comment-form").find("#comment").val().length == 0 || $(".comment-form").find("#comment").val().value == '') {
                fields = '1';
                $(".comment-form").find("#comment").addClass("inputerror");
            }
        }
        if ($(this).parent().parent().find('#email').length == 1) {
            if ($(".comment-form").find("#email").val().length == 0 || $(".comment-form").find("#email").val().length == '') {
                fields = '1';
                $(".comment-form").find("#email").addClass("inputerror");
            } else {
                var re = new RegExp();
                re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var sinput;
                sinput = "";
                sinput = $(".comment-form").find("#email").val();
                if (!re.test(sinput)) {
                    fields = '1';
                    $(".comment-form").find("#email").addClass("inputerror");
                }
            }
        }
        if (fields != "") {
            return false;
        } else {
            return true;
        }
    });

    //On Focus
    $('.blog-comment .comment-fields').on('focus', function () {
        $(this).removeClass('inputerror');
    });


    /*==============================================================*/
    // Top Space
    // /*==============================================================*/

    if ($('.navbar').hasClass('navbar-top')) {
        if ($('.top-space').length > 0) {
            var top_space_height = $('.navbar').outerHeight() + $('.header-top-area').outerHeight();
            $('.top-space').css('margin-top', top_space_height + "px");
        }
    }


    if ($('.navbar').hasClass('center-logo')) {
        var count = $('.center-logo ul.navbar-nav>li').length / 2;
        var item = ':nth-child(' + Math.round(count) + ')';
        $('.center-logo ul.navbar-nav>li' + item).addClass('right-auto');
    }
    if ($('.navbar').hasClass('center-top-logo')) {
        var count = $('.center-top-logo ul.navbar-nav>li').length / 2;
        var item = ':nth-child(' + Math.round(count) + ')';
        $('.center-top-logo ul.navbar-nav>li' + item).addClass('right-auto');
    }


    // fixing bottom nav to top on scrolliing

    var $fixednav = $(".bottom-navbar");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });


    //Nav Icon

    $(".nav-icon .navbar-nav").append('<li class="menu-icon"></li>');

    (function () {
        // Your base, I'm in it!
        var originalAddClassMethod = jQuery.fn.addClass;

        jQuery.fn.addClass = function () {
            // Execute the original method.
            var result = originalAddClassMethod.apply(this, arguments);

            // trigger a custom event
            jQuery(this).trigger('cssClassChanged');

            // return the original result
            return result;
        }
    })();

    $(".nav-link").bind('cssClassChanged', function (e) {
        $(".nav-item").each(function () {
            if ($(this).hasClass("active") == true) {
                $(this).removeClass("active");
            }
        });

        $(this).removeClass("active").parent().addClass("active");
    });


    /* ===================================
     Rotating Text
     ====================================== */

    if ($("#js-rotating").length) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }


    /* =====================================
         Parallax
    ====================================== */


    function parallax() {
        var winHeight = $(window).height();
        $('.parallax').each(function (e, layer) {
            var ratio = 0.3;
            var height = $(layer).outerHeight();
            var offset = $(layer).offset().top;
            var scrolling = $(window).scrollTop();
            var bgY = Math.round((offset - scrolling) * ratio);
            var transform = Math.round(((offset - (winHeight / 4) + height) - scrolling) * ratio);
            $(layer).css({'background-position': 'center ' + bgY + 'px'});
        });
    }

    $(document).ready(function ($) {
        if ($(window).width() > 992) {

            parallax();

            $(window).on('scroll', function () {

                parallax();

            });

        }
    });


    $(window).on("load", function () {

        $("#post-gallery").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


    });

});





