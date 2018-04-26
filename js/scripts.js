$(document).ready(function () {
    // PARALLAX EFFECT
    var scrollorama = $.scrollorama({
        blocks: '.scrolling'
    });
     
    scrollorama.animate('#layer-one', {
        delay: 0, duration: 800, property: 'top', start: 0, end: -800
    });
    scrollorama.animate('#layer-two', {
        delay: 0, duration: 540, property: 'top', start: 0, end: -600
    });
    scrollorama.animate('#layer-three', {
        delay: 0, duration: 580, property: 'top', start: 0, end: -600
    }); 
    scrollorama.animate('#layer-four', {
        delay: 0, duration: 500, property: 'top', start: 0, end: -600
    }); 


    // SMOOTH SCROLL

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              // var $target = $(target);
              // $target.focus();
              // if ($target.is(":focus")) { // Checking if the target was focused
              //   return false;
              // } else {
              //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              //   $target.focus(); // Set focus again
              // };
            });
          }
        }
        
      });
    
    // var $root = $('html, body');

    // $('.navbar-nav a').click(function() {
    //     var href = $.attr(this, 'href');

    //     if (href != undefined && href != '#') {
    //         $root.animate({
    //             scrollTop: $(href).offset().top
    //         }, 500, function() {
    //             window.location.hash = href;
    //         });
    //     }

    //     return false;
    // });
});