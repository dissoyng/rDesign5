/*global $, jQuery, alert*/
$(function () {
    'use strict';
    //Nice Scroll
    $("html").niceScroll({
        cursorwidth: "10px",
        cursorborder: "none",
        cursorcolor: "#e8115b"
    });
    
    //for Navbar
    $("nav .navbar, nav .brand h4, nav .menu i").addClass('toppy');
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 600) {
            $("nav .navbar, nav .brand h4, nav .menu i").addClass('toppy');
        } else {
            $("nav .navbar, nav .brand h4, nav .menu i").removeClass('toppy');
        }
    });
    
    //for nav menuList
    $('nav .menu').on('click', function () {
        $("nav .menuList").fadeIn("fast");
        $("nav .menuList ul").slideDown(700, "swing");
    });
    $('nav .menuList').on('click', function () {
        $("nav .menuList").fadeOut("slow");
        $("nav .menuList ul").slideUp(700, "swing");
    });
    
    //for menuList scrolling
    $('nav .menuList li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - (68)
        }, 1000);
    });
    
});

//PreLoading ...
$(window).on("load", function () {
    'use strict';
    $(".loadingOverlay .loader").fadeOut(1000, function () {
        $(this).parent().fadeOut('slow', function () {
            $(this).remove();
        });
    });
});
