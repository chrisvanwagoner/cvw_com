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

// var moveBlue = anime({
//   targets: '#shapes__blue',
//   points: [
//     { value: '212.094205,582.322815 C192.81317,593.998548 160.160043,677.580791 180.367029,723.543488 C203.556952,776.291154 334.831493,860.920005 391.727687,832.890369 C406.964495,825.384029 431.800162,801.962576 413.798251,782.911828 C365.261597,731.547304 472.755012,625.884528 449.585938,596.976563 C422.720509,563.456669 289.666615,535.348428 212.094205,582.322815' },
//   ],
//   easing: 'easeOutQuad',
//   duration: 2000,
//   loop: true
// });