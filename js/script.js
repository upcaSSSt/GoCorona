const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
	const menuBody = document.querySelector('.menu__body');
	headerBurger.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
