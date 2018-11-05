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
    offset:       200,          // distance to the element when triggering the animation (default is 0)
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


// var svgMorphingBlue = anime({
//   targets: '.header__svg-wrap #shapes__blue',
//   d: [
//     { value: 'M1112.89,2422.18c-105.845,195.503 -154.021,435.229 -7.197,584.253c79.147,80.333 327.559,498.358 589.003,459.779c154.957,-22.866 365.459,-189.712 287.794,-391.577c-105.733,-274.817 -136.582,-586.141 -201.337,-717.066c-79.353,-160.437 -582.484,-93.831 -668.263,64.611Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 3000,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingBlueLight = anime({
//   targets: '.header__svg-wrap #shapes__blue--light',
//   d: [
//     { value: 'M4132.61,2707.62c-24.219,68.083 60.066,247.898 223.134,184.647c134.167,-52.04 210.291,-28.935 276.388,-132.905c94.065,-147.963 221.195,-120.454 371.42,-249.4c110.149,-94.548 108.471,-155.353 98.937,-263.04c-13.254,-149.704 26.325,-204.971 -138.121,-283.761c-112.966,-54.125 -202.861,-30.85 -339.675,13.068c-169.152,54.297 -143.088,386.037 -232.691,388.099c-265.886,6.118 -227.194,252.778 -259.392,343.292Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 4000,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingBlueLight = anime({
//   targets: '.header__svg-wrap #shapes__red',
//   d: [
//     { value: 'M3919.83,1856.63c-55.134,222.972 -284.316,259.089 -244.319,565.296c20.998,160.762 100.929,396.591 517.461,307.587c207.042,-44.241 266.878,41.773 360.645,-224.938c39.065,-111.117 57.369,-88.759 102.438,-221.516c19.744,-58.16 5.549,-265.493 167.416,-354.745c168.315,-92.807 197.912,-353.233 102.802,-424.429c-128.145,-95.924 -274.669,10.383 -553.428,-98.08c-307.35,-119.587 -415.96,300.971 -453.015,450.825Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 4200,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingPink = anime({
//   targets: '.header__svg-wrap #shapes__pink',
//   d: [
//     { value: 'M1764.95,1569.76c-196.219,107.963 -259.412,492.907 -491.717,574.397c-253.059,88.771 -181.572,734.454 80.314,776.23c515.914,82.297 938.822,-65.845 1093.8,41.596c190.32,131.942 711.793,-168.671 869.704,-122.956c319.067,92.369 573.613,779.472 749.813,662.321c287.238,-190.978 603.079,-784.962 489.577,-987.449c-171.362,-305.706 -226.902,-820.545 -506.607,-881.254c-242.999,-52.742 -1116.38,365.027 -1434.17,97.431c-220.081,-185.316 -638.379,-277.144 -850.709,-160.316Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 5200,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingBlack = anime({
//   targets: '.header__svg-wrap #shapes__black',
//   d: [
//     { value: 'M2692.67,3146.8c-142.651,-36.287 -177.216,107.527 -325.39,107.992c-63.32,0.199 -135.908,107.538 -149.984,170.394c-15.543,69.408 243.759,139.722 317.318,156.25c157.665,35.427 506.045,-45.972 532.942,-142.725c23.957,-86.175 -35.02,-107.484 -115.429,-200.83c-59.072,-68.575 -147.352,-62.564 -259.457,-91.081Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 4200,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingYellow = anime({
//   targets: '.header__svg-wrap #shapes__yellow',
//   d: [
//     { value: 'M2948.5,1146.13c-289.77,157.787 -320.811,807.934 -131.842,1003.14c179.365,185.286 110.23,449.266 598.925,546.632c260.177,51.837 503.014,231.685 831.535,68.039c288.545,-143.731 485.641,-374.475 541.661,-590.934c24.542,-94.83 -29.485,-451.984 -153.897,-708.036c-124.412,-256.051 -97.728,-577.706 -142.858,-734.386c-66.218,-229.894 -581.9,-195.123 -733.623,-155.484c-392.102,102.441 -609.012,461.64 -809.901,571.029Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 5000,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingPurple = anime({
//   targets: '.header__svg-wrap #shapes__purple',
//   d: [
//     { value: 'M4140.29,2239.36c228.418,-363.527 35.079,-832.444 -22.694,-1197.93c-41.775,-264.276 -36.776,-821.269 -773.671,-906.118c-335.376,-38.616 -774.039,237.79 -885.954,564.309c-133.872,390.577 -557.951,528.136 -598.841,820.014c-17.914,127.871 241.705,833.154 547.284,1151.72c310.821,324.034 733.495,373.228 1056.78,251.86c237.075,-89.001 514.131,-424.51 677.092,-683.862Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 3600,
//   direction: 'alternate',
//   loop: true
// });

// var svgMorphingGreen = anime({
//   targets: '.header__svg-wrap #shapes__green',
//   d: [
//     { value: 'M1578.79,2113.07c220.969,-106.979 225.499,-117.635 397.915,-445.769c143.492,-273.09 76.943,-605.523 22.224,-755.89c-36.719,-100.899 -162.164,-390.278 -474.757,-512.649c-265.208,-103.822 -623.302,-150.183 -591.254,182.163c35.409,367.214 980.878,857.162 253.927,964.58c-270.035,39.902 -350.993,228.065 -240.266,411.105c152.12,251.465 381.728,277.728 632.211,156.46Z' },
//   ],
//   easing: 'easeInOutQuad',
//   duration: 3600,
//   direction: 'alternate',
//   loop: true
// });


var line = anime({
  targets: '.header__svg-wrap path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 4000,
  delay: function(el, i) { return i * 5 },
  direction: 'normal',
  loop: false
});

/* ==============================
basicScroll animations
============================== */
// document.querySelectorAll(".work__client img").forEach(function(elem) {
//   var instance = basicScroll.create({
//     elem: elem,
//     from: "bottom-bottom",
//     to: "top-top",
//     direct: true,
//     props: {
//       "--dist": {
//         from: "100",
//         to: "0"
//       }
//     }
//   })
//   .start();
// });