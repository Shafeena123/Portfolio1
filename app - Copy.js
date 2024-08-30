const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
fetch('https://script.google.com/macros/s/AKfycbwXW-WjIkgzhcOL4De_jf9oAcNK1af7MgKFJqretsZtiHHCOR1rrcjRekZxfcTd4oPE/exec', {
	method: 'POST',
	body: data,
	headers: {
	  'Content-Type': 'application/x-www-form-urlencoded'
	}
  })
  