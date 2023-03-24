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
  
// $(document).ready(function() {
//     // get the video element and set up an event listener for when it ends
//     var video = $('video')[0];
//     video.addEventListener('ended', function() {
//       // hide the video container element
//       $('.responsive-video').hide();
//     });
//   });
  
