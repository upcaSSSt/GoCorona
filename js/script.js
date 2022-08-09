const headerBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (headerBurger) {
	headerBurger.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}