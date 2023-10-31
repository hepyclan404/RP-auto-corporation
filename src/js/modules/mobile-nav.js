function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	// Scroll on click
	const menuLinks = document.querySelectorAll('.mobile-nav__link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick);
		});
		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				if (menuIcon.classList.contains('nav-icon--active')) {
					document.body.classList.remove('no-scroll');
					menuIcon.classList.remove('nav-icon--active');
					nav.classList.remove('mobile-nav--open');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
			}
		}
	}
}

export default mobileNav;