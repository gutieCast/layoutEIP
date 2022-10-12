const body = document.querySelector('body');
const nav = document.querySelector('.nav-menu');
const btn = document.querySelector('#menu-button-toggle');
const linksMenu = [...document.getElementsByClassName('link-menu')];
   
const navMobileToggle = () => {
    body.classList.toggle('nav-open');
    // addMenu();
}

btn.addEventListener('click', event => {
    event.preventDefault;
    navMobileToggle();
});

const addMenu = () => {
    nav.appendChild(ul);
}

const closeNavMobile = () => {
    body.classList.remove('nav-open')
}

linksMenu.forEach(link => {
    link.addEventListener('click', closeNavMobile);
});