$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("sticky");
        } else {
           $(".header").removeClass("sticky");
        }
    });
});
$(document).ready(function() {
    var $hamburger = $('.m-hamburger');
    var $menu = $('.mobile-menu');
  
    if ($hamburger.length && $menu.length) {
      $hamburger.on('click', function() {
        $menu.toggleClass('active');
      });
    } else {
      console.error('One or more required elements not found.');
    }
  });