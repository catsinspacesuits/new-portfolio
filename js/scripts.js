
// JQuery for parallax and smooth scroll plugins

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
            // Only prevent default if animation is actually going to happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              
            });
          }
        }
        
      });
   
});

// JS for tooltips

var Tooltip = {
  init: function() {
    // create links array
    var links = document.querySelectorAll("i");

    if(links) {
      for (var i = 0; i < links.length; i++) {
        if (links[i].title.length) {
          links[i].addEventListener("mouseover", Tooltip.showTip);
          links[i].addEventListener("mouseout", Tooltip.hideTip);
        }
      }
    }    
  },

  showTip: function(event) {
    // create and add tooltip
    var spanElement = document.createElement("span");
    spanElement.className = "tooltip";
    spanElement.innerHTML = event.target.title;

    // set element title to nothing
    event.target.title = "";
    event.target.appendChild(spanElement);
    event.target._spanRef = spanElement;
  },

  hideTip: function(event) {
    event.target.title = event.target._spanRef.innerHTML;
    event.target.removeChild(event.target._spanRef);
  }
};  

window.addEventListener("load", Tooltip.init);

// JS for modal window

// OPEN MODAL WINDOWS

document.querySelectorAll('.modal-btn').forEach(function(item){  
  item.addEventListener('click', 
  function(e) {
    var target = item.getAttribute("data-modal");
    document.querySelector(target).style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  });
})

// CLOSE MODAL WINDOWS

document.querySelectorAll('.close-box').forEach(function(item){  
  item.addEventListener('click', 
  function(e) {
    var target = item.getAttribute("data-modal");
    document.querySelector(target).style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  });
})

