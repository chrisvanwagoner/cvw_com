/* runthis.js */

/* ==============================
Instanciate Wow.js object
============================== */
var wow = new WOW({
    boxClass:     'animate',  // animated element css class (default is wow)
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


let clientEntry = document.querySelectorAll('.client');
let fadeInLeft = document.querySelectorAll('.fadeInLeft');
let windowHeight = window.innerHeight;
let targetTop = windowHeight * 0.3;
let targetBottom = windowHeight * 0.7;
let checkHeight = (event) => {
}

// fadeInLeft.forEach((el) => {
//   el.style.setProperty('opacity', 0);
//   let rect = el.getBoundingClientRect();
//   let top = rect.top;
//   el.style.setProperty('transition', 'opacity 300ms ease-in-out');
//   el.style.setProperty('opacity', 1);
// });

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(() => {

    fadeInLeft.forEach((el) => {
      let rect = el.getBoundingClientRect();
      let top = rect.top;
      el.style.setProperty('--left', ((top-el.offsetTop) / 2) + 'px');
      el.style.setProperty('--opacity', (1 - (-top / 800)));
    });

    clientEntry.forEach((el) => {
      let elRect = el.getBoundingClientRect();
      let elName = el.querySelector('.client-name');
      let distFromTop = elRect.top;
      let weight;
      if (distFromTop <= targetTop) {
        weight = ((distFromTop / targetTop) * 300) + 100;
        elName.style.setProperty('--wght', weight );
      } else if ((distFromTop >= targetBottom) && (distFromTop <= windowHeight)) {
        weight = (400 - (distFromTop - (targetBottom)) * 2);
        elName.style.setProperty('--wght', weight );
      } else {
        elName.style.setProperty('--wght', 400 );
      }
    });
  });
});