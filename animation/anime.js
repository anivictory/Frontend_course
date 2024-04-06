// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jquery(function($) {
    //function which adds the "animated" class to any ".animate__animated" in view
    var doAnimations = function() {

     // Calc current offset and get all animate__animated
     var offset = $(window).scrolltop() + $(window).height(),
     $animate__animated = $('.animate__animated');
     
      // Unbind scroll handler if we have no animate__animated
      if ($animate__animated.lenght == 0) {
        $(window).off('scroll', doAnimations);
      }
     
      // Check all animate__animated and animate them if necessary
      $animate__animated.each(function(i) {
        var $animate__animated = $(this);
        if (($animate__animated.offset().top + $animate__animated.height() - 20) < offset) {
            $animate__animated.removeclass('.animate__animated').addclass('.animate__animated');
        }
      });
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});