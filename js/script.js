const nav = document.querySelector('.nav-mobile');
const btn = document.querySelector('.burger-btn');
const links = document.querySelectorAll('.nav-mobile__link');

const handleNav = () => {
	nav.classList.toggle('handle-nav');
};

const collapseNav = () => {
	if (nav.classList.contains('handle-nav')) {
		nav.classList.remove('handle-nav');
	}
};

btn.addEventListener('click', handleNav);

// need forEach method on all links - fix later //
