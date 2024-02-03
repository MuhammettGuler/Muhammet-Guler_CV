var menuBar = document.getElementById('manu_bar');
var navLinks = document.querySelector('.nav_links');

navLinks.style.top = '-450px';

function toggleMenu() {
    if (navLinks.style.top === '-450px') {
        navLinks.style.top = '50px';
    } else {
        navLinks.style.top = '-450px';
    }
}
menuBar.addEventListener('click', toggleMenu);
