$(document).ready(function(){
	$('.slider').slick();

	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.footer .bold').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	})
});

const popupLinks = document.querySelectorAll(".header_logo");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock__padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace("#", "");
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}
}

const popupCloseIcons = document.querySelectorAll('.close-popup');
if (popupCloseIcons.length > 0) {
	for (let index = 0; index < popupCloseIcons.length; index++) {
 	const el = popupCloseIcons[index];
 	el.addEventListener('click', function (e) {
 		popupClose(el.closest('.popup'));
 		e.preventDefault();
 	})
 }}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout( function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function() {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);
}

