const menu = document.getElementsByClassName('menu')[0];
const menuToggle = document.getElementById('burger');
const black = document.getElementsByClassName('black-screen')[0]
const body = document.body


// Funkcja otwierania/zamykania menu
function toggleMenu() {

    if (!black.classList.contains('menu-open')) {
        menu.style.left = 0;
        body.style.overflow = 'hidden';
        black.classList.add('menu-open');

    } else{
        menu.style.left = '-100%';
        body.style.overflow = 'auto';
        black.classList.remove('menu-open');
    }
}
menuToggle.addEventListener('click', toggleMenu);
black.addEventListener('click', toggleMenu);

