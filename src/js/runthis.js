/* runthis.js */

let clientEntry = document.querySelectorAll('.client');
let fadeLeft = document.querySelectorAll('.fade-left');
let fadeRight = document.querySelectorAll('.fade-right');
let windowHeight = window.innerHeight;
let targetTop = windowHeight * 0.4;
let targetBottom = windowHeight * 0.7;
let pathMain = document.querySelector('.main__svg path');
let pathFooter = document.querySelector('.footer__svg path');
let body = document.querySelector('body');
let toggleButton = document.querySelector('.toggle');
let pathMainAnimate = anime({
	targets: pathMain,
	loop: false,
	direction: 'linear',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeOutExpo',
	duration: 3000,
	autoplay: false,
	delay: 500

});
let pathFooterAnimate = anime({
	targets: pathFooter,
	loop: false,
	direction: 'linear',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeOutExpo',
	duration: 4000,
	autoplay: false,
	delay: 500
});


let events = () => {

	fadeLeft.forEach((el) => {
		let top = el.getBoundingClientRect().top;
		// let top = rect.top;
		let speed = el.dataset.speed;
		el.style.setProperty('--left', ((top - el.offsetTop) * speed) + 'px');
		el.style.setProperty('--opacity', (1 - (-top / 800)));
	});
	fadeRight.forEach((el) => {
		let top = el.getBoundingClientRect().top;
		// let top = rect.top;
		let speed = el.dataset.speed;
		el.style.setProperty('--left', ((top - el.offsetTop) * speed) + 'px');
		el.style.setProperty('--opacity', (1 - (-top / 800)));
	});

	clientEntry.forEach((el) => {
		let distFromTop = el.getBoundingClientRect().top;
		let elName = el.querySelector('.client__name');
		let weight;
		let skew;
		let translateX;
		const maxWeight = 300;
		const maxSkew = 15;
		const maxTranslate = 200;
		if (distFromTop <= targetTop) {
			weight = ((distFromTop / targetTop) * (maxWeight - 100)) + 100;
			skew = ((targetTop - distFromTop) / targetTop) * maxSkew;
			translateX = (((targetTop - distFromTop) / targetTop) ** 3) * maxTranslate;
			

			elName.style.setProperty('--wght', weight);
			if (window.innerWidth > 600) {
				elName.style.setProperty('--skew', `${skew.toString()}deg`);
				elName.style.setProperty('--translateX', `-${translateX.toString()}px`);
			}
		} else {
			elName.style.setProperty('--wght', maxWeight);
			elName.style.setProperty('--skew', '0');
			elName.style.setProperty('--translateX', '0');
		}
	});
	
}

// TODO: add check if system pref is set to light or dark mode
// TODO: change the button copy and class if light or dark

let checkScrollMain = () => {
	let distFromTop = pathMain.getBoundingClientRect().top;
	if (distFromTop <= targetBottom) {
		window.removeEventListener('scroll', checkScrollMain);
		pathMainAnimate.play();
	}
};

let checkScrollFooter = () => {
	let distFromTop = pathFooter.getBoundingClientRect().top;
	if (distFromTop <= targetBottom) {
		window.removeEventListener('scroll', checkScrollFooter);
		pathFooterAnimate.play();
	}
};

window.addEventListener('scroll', checkScrollMain);
window.addEventListener('scroll', checkScrollFooter);
window.addEventListener('scroll', () => {
	window.requestAnimationFrame(events);
});
window.addEventListener('resize', () => {
	window.requestAnimationFrame(events);
});
	

let toggleMode = (event) => {
	if (body.classList.contains('dark-mode') == true) {
		body.classList.add('light-mode');
		body.classList.remove('dark-mode');
		// event.target.classList.remove('toggle--dark')
		event.target.innerHTML = '<span id="toggle-label" hidden>Switch to dark mode</span>';
	} else {
		body.classList.add('dark-mode');
		body.classList.remove('light-mode');
		// event.target.classList.add('toggle--dark')
		event.target.innerHTML = '<span id="toggle-label" hidden>Switch to light mode</span>';
	}
};
toggleButton.addEventListener('click', toggleMode);
console.log(window.getComputedStyle(body));


let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
const setColorScheme = e => {
  if (e.matches) {
    body.classList.add('dark-mode');
    
    console.log('Dark mode')
  } else {
    body.classList.add('light-mode');
    
    console.log('Light mode')
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener(setColorScheme, null);

// let preview = document.querySelector('#preview');
// clientEntry.forEach((el) => {
//   let name = el.querySelector('.client-name');
//   let image = name.getAttribute('data-preview');
//   name.addEventListener('mouseover', (e) => {
//     window.setTimeout(() => {
//       preview.style.setProperty('background-image', 'url(' + image + ')');
//       preview.style.setProperty('opacity', '0.5');
//     }, 250);
//   });
//   name.addEventListener('mouseout', (e) => preview.style.setProperty('opacity', '0'));
// });