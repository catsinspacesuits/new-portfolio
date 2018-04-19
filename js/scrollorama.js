$(document).ready(function () {
    var scrollorama = $.scrollorama({
        blocks: '.parallax-container'
    });
    scrollorama.animate('#main-img', {
        delay: 0, duration: 800, property: 'top', start: 80, end:0
    });
    scrollorama.animate('#icons-back', {
        delay: 0, duration: 800, property: 'top', start: 280, end: 360
    });
    scrollorama.animate('#icons-mid', {
        delay: 0, duration: 800, property: 'top', start: 400, end: -200
    }); 
    scrollorama.animate('#icons-front', {
        delay: 0, duration: 800, property: 'top', start: 1000, end: -500
    }); 
});

