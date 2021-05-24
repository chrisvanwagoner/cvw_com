/* runthis.js */

let body = document.querySelector('body');
let preview = document.querySelector('#preview');
let toggleButton = document.querySelector('.toggle');
let fadeLeft = document.querySelectorAll('.fade-left');
let fadeRight = document.querySelectorAll('.fade-right');
let clientEntry = document.querySelectorAll('.client');
let windowHeight = window.innerHeight;
let targetTop = windowHeight * 0.4;
let targetBottom = windowHeight * 0.7;
let pathMain = document.querySelector('.main__svg path');
// let x, y = 0;
// window.addEventListener('mousemove', e => {
//     x = e.pageXOffset;
//     y = e.pageYOffset;
// });
// // Print x and y to console on mousedown
// window.addEventListener('mousedown', e => {
// 	console.log(`x: ${x}\ty: ${y}`);
// });
let pathMainAnime = anime({
	targets: pathMain,
	loop: false,
	direction: 'linear',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeOutExpo',
	duration: 3000,
	autoplay: false,
	delay: 500
	
});
let pathFooter = document.querySelector('.footer__svg path');
let pathFooterAnime = anime({
	targets: pathFooter,
	loop: false,
	direction: 'linear',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeOutExpo',
	duration: 4000,
	autoplay: false,
	delay: 500
});

// // Updating #preview with client site images
// clientEntry.forEach((el) => {
// 	let elName = el.querySelector('.client__name');
// 	elName.addEventListener('mouseover', e => {
// 		let elPreview = e.target.offsetParent.getAttribute('data-preview');
// 		// console.log(elPreview);
// 		preview.style.opacity = 1;
// 		preview.style.backgroundImage = `url("../${elPreview}")`;
// 		// TODO: replace e.pageX/Y with cursor position
// 		preview.style.setProperty('--x', `${x}px`);
// 		preview.style.setProperty('--y', `${y}px`);
// 		console.log(`x: ${x}\ty: ${y}`);

// 	});
// 	elName.addEventListener('mouseout', () => {
// 		// preview.style.opacity = 0;
// 	});
// });



// Move header and client elements as page is scrolled
const scrollEvents = () => {

	fadeLeft.forEach((el) => {
		let top = el.getBoundingClientRect().top;
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
		const maxSkew = 35;
		const maxTranslate = 100;
		if (distFromTop <= targetTop) {
			weight = ((distFromTop / targetTop) * (maxWeight - 100)) + 100;
			skew = ((targetTop - distFromTop) / targetTop) * maxSkew;
			translateX = (((targetTop - distFromTop) / targetTop) ** 3) * maxTranslate;
			elName.style.setProperty('--wght', weight);
			elName.style.setProperty('--skew', `${skew.toString()}deg`);
			elName.style.setProperty('--translateX', `-${translateX.toString()}px`);
		} else {
			elName.style.setProperty('--wght', maxWeight);
			elName.style.setProperty('--skew', '0');
			elName.style.setProperty('--translateX', '0');
		}
	});

}

const checkScrollMain = () => {
	let distFromTop = pathMain.getBoundingClientRect().top;
	if (distFromTop <= targetBottom) {
		window.removeEventListener('scroll', checkScrollMain);
		pathMainAnime.play();
	}
};

const checkScrollFooter = () => {
	let distFromTop = pathFooter.getBoundingClientRect().top;
	if (distFromTop <= targetBottom) {
		window.removeEventListener('scroll', checkScrollFooter);
		pathFooterAnime.play();
	}
};

window.addEventListener('scroll', checkScrollMain);
window.addEventListener('scroll', checkScrollFooter);
window.addEventListener('scroll', () => {
	window.requestAnimationFrame(scrollEvents);
});
window.addEventListener('resize', () => {
	window.requestAnimationFrame(scrollEvents);
});


// Toggle dark/light mode
let toggleMode = () => {
	if (body.classList.contains('dark-mode') == true) {
		body.classList.add('light-mode');
		body.classList.remove('dark-mode');
		event.target.innerHTML = '<span id="toggle-label" hidden>Switch to dark mode</span>';
	} else {
		body.classList.add('dark-mode');
		body.classList.remove('light-mode');
		event.target.innerHTML = '<span id="toggle-label" hidden>Switch to light mode</span>';
	}
};

toggleButton.addEventListener('click', toggleMode);
let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
	if (e.matches) {
		body.classList.add('dark-mode');
	} else {
		body.classList.add('light-mode');
	}
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener(setColorScheme, null);