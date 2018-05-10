var touchMenu = document.querySelector('.touch-menu');
var menuBurger = document.querySelector('.menu-burger');

touchMenu.addEventListener('click', function() {
	menuBurger.classList.toggle('menu-burger_opened');
});