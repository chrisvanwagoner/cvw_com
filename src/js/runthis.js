/* runthis.js */

/* Smooth scrolling to in-page anchor tag */
jQuery(document).on('click', 'a[href*="#"]', function(event){
	event.preventDefault();
	jQuery('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
 	}, 750);
});

/* ==============================
Instanciate Wow.js object
============================== */
var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
wow.init();


/* ==============================
Anime.js animations
============================== */

var pathAroundPink= anime.path('.svg-shape--pink path');
var pathAroundPurple= anime.path('.svg-shape--purple path');
var pathAroundGreen= anime.path('.svg-shape--green path');

var svgShapePurple = anime({
  targets: '.svg-shape--purple',
  translateX: pathAroundGreen('x'),
  translateY: pathAroundGreen('y'),
  easing: 'linear',
  rotate: 360,
  duration: 20000,
  direction: 'reverse',
  loop: true
});

var svgShapePink = anime({
  targets: '.svg-shape--pink',
  translateX: pathAroundPurple('x'),
  translateY: pathAroundPurple('y'),
  easing: 'linear',
  rotate: 720,
  duration: 20000,
  direction: 'linear',
  loop: true
});

var svgShapeGreen = anime({
  targets: '.svg-shape--green',
  translateX: pathAroundPink('x'),
  translateY: pathAroundPink('y'),
  easing: 'linear',
  rotate: 720,
  duration: 22000,
  direction: 'reverse',
  loop: true
});

var svgShapeBlue = anime({
  targets: '.svg-shape--blue',
  translateX: pathAroundPink('x'),
  translateY: pathAroundPink('y'),
  easing: 'linear',
  rotate: 360,
  duration: 28000,
  direction: 'linear',
  loop: true
});