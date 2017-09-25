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

/* Fade in/up the entire Header block */
var headerFadeUp = anime({
  targets: '.header__content-wrap',
  translateY: 50,
  duration: 1000,
  easing: 'easeInOutQuad',
  loop: 1,
  direction: 'reverse',
  opacity: 0,
});

/* Animation for Header Name */
var headerNameFadeIn = anime({
	targets: '.header__name',
	translateX: 50,
	duration: 1000,
	easing: 'easeInOutQuad',
	loop: 1,
	direction: 'reverse',
});

/* Animation for Header Text */
var headerSummaryFadeIn = anime({
	targets: '.header__summary',
	translateY: 50,
	duration: 1000,
	easing: 'easeInOutQuad',
	loop: 1,
	direction: 'reverse',
});
