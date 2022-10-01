const hamburger = document.querySelector('.hamburger');
const smallMenuArea = document.querySelector('.small-menu-area');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('show');
	smallMenuArea.classList.toggle('show');
})