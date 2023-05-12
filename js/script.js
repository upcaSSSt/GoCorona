const scroller = document.querySelector('.scroller-gradient');
if (scroller) {
	window.addEventListener("scroll", function() {
		let totalHeight = document.body.scrollHeight - window.innerHeight;
		let scrollerHeight = window.pageYOffset / totalHeight * 100;
		scroller.style.height = scrollerHeight + "%";
	});
}

const headerBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (headerBurger) {
	headerBurger.addEventListener("click", function() {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
