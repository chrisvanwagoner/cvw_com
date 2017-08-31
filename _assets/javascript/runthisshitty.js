/* smooth scrolling to in-page anchor tag */
jQuery(document).on('click', 'a[href*="#"]', function(event){
	event.preventDefault();
	jQuery('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
 	}, 750);
});

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

/* #Work animation object. Section slides in from the left */
var slideWorkTitleFromLeft = {
  targets: '#work',
  translateX: 200,
  duration: 1000,
  easing: 'easeInOutQuad', 
  opacity: 1,
};

/* Prepare #work befor applying animation */
var el = document.getElementById('work');
el.style.left = "-200px";
el.style.opacity = "0.5";

/* Animate #work when scrolled into viewport */
$(window).scroll(function() {
	var elementDistanceToWindowTop = $('#work').offset().top,
		elementHeight = $('#work').outerHeight(),
		viewportHeight = $(window).height(),
		distanceFromTopOfSite = $(this).scrollTop();
  	var ninetyPercentOfViewportHeight = viewportHeight * 0.9;
  	/* Print the variables' values to the console */
	// console.log("elementDistanceToWindowTop is " + elementDistanceToWindowTop); console.log("elementHeight is " + elementHeight); console.log("viewportHeight is " + viewportHeight); console.log("distanceFromTopOfSite is " + distanceFromTopOfSite);
	if (distanceFromTopOfSite > (elementDistanceToWindowTop + elementHeight - ninetyPercentOfViewportHeight) ) {
		console.log('element is in the viewport.');
		anime(slideWorkTitleFromLeft);
	}
});