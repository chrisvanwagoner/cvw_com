// anime({
//   targets: '.primary',
//   translateX: -100,
//   duration: 1000,
//   easing: 'easeInOutElastic' 
// });


// smooth scrolling to in-page anchor tag
jQuery(document).on('click', 'a[href*="#"]', function(event){
	event.preventDefault();
	jQuery('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
 	}, 500);
});