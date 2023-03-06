// ----------------------------------
// scripts.js
// Scripts for strobe controls
// ----------------------------------

// HTML ELEMENTS
const inputColor1 = document.getElementById('input-color-primary');
const inputColor2 = document.getElementById('input-color-secondary');
const inputSpeedInner = document.getElementById('input-speed-inner');
const inputSpeedOuter = document.getElementById('input-speed-outer');
const inputStripeInner = document.getElementById('input-stripe-inner');
const inputStripeOuter = document.getElementById('input-stripe-outer');
const inputMultiplierInner = document.getElementById('input-inner-multiplier');
const inputMultiplierOuter = document.getElementById('input-outer-multiplier');
const inputDistanceInner = document.getElementById('input-inner-distance');
const inputDistanceOuter = document.getElementById('input-outer-distance');
const fullscreen = document.getElementById('fullscreen');
const docElement = document.documentElement;

// CSS Root
const root = document.querySelector(':root');

// ----------------------------------
// Toggle Fullscreen
// Code mostly from here: 
// https://www.w3schools.com/howto/howto_js_fullscreen.asp
// ----------------------------------

function openFullscreen() {
	if (docElement.requestFullscreen) {
		docElement.requestFullscreen();
	}
	else if (docElement.webkitRequestFullscreen) { /* Safari */
		docElement.webkitRequestFullscreen();
	}
	else if (docElement.msRequestFullscreen) { /* IE11 */
		docElement.msRequestFullscreen();
	}
	return;
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
	else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	}
	else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	}
	return;
}

function toggleFullscreen() {
	if (fullscreen.innerHTML == 'fullscreen') {
		openFullscreen();
		fullscreen.innerHTML = 'fullscreen_exit';
	}
	else {
		closeFullscreen();
		fullscreen.innerHTML = 'fullscreen';
	}
	return;
}

// ----------------------------------
// Event Listeners
// ----------------------------------

inputColor1.addEventListener('input',
	() => root.style.setProperty('--primary', inputColor1.value));

inputColor2.addEventListener('input',
	() => root.style.setProperty('--secondary', inputColor2.value));

inputSpeedInner.addEventListener('input',
	() => root.style.setProperty('--inner-speed', inputSpeedInner.value + 's'));

inputSpeedOuter.addEventListener('input',
	() => root.style.setProperty('--outer-speed', inputSpeedOuter.value + 's'));

inputStripeInner.addEventListener('input',
	() => root.style.setProperty('--inner-stripe', inputStripeInner.value + 'px'));

inputStripeOuter.addEventListener('input',
	() => root.style.setProperty('--outer-stripe', inputStripeOuter.value + 'px'));

inputMultiplierInner.addEventListener('input',
	() => root.style.setProperty('--inner-multiplier', inputMultiplierInner.value));

inputMultiplierOuter.addEventListener('input',
	() => root.style.setProperty('--outer-multiplier', inputMultiplierOuter.value));

inputDistanceInner.addEventListener('input',
	() => root.style.setProperty('--inner-distance-base', inputDistanceInner.value + 'px'));

inputDistanceOuter.addEventListener('input',
	() => root.style.setProperty('--outer-distance-base', inputDistanceOuter.value + 'px'));

fullscreen.addEventListener('click', toggleFullscreen);

// ----------------------------------