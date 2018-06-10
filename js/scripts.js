
// JQuery for parallax and smooth scroll

$(document).ready(function () {
    // PARALLAX EFFECT
    var scrollorama = $.scrollorama({
        blocks: '.scrolling'
    });
     
    scrollorama.animate('#layer-one', {
        delay: 0, duration: 800, property: 'top', end: -820
    });
    scrollorama.animate('#layer-two', {
        delay: 0, duration: 500, property: 'top', end: -600
    });
    scrollorama.animate('#layer-three', {
        delay: 0, duration: 540, property: 'top', end: -630
    }); 
    scrollorama.animate('#layer-four', {
        delay: 0, duration: 440, property: 'top', end: -600
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


    
});

// JS for modal window

// Open modal window

document.querySelector('#modal-btn').addEventListener('click', 
  function() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  });

// Close modal window

document.querySelector('#close-box').addEventListener('click', 
  function () {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  });




