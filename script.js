// TOGGLE HAMBURGER MENU
const toggler = document.getElementById('toggler');
const span = document.querySelectorAll('nav .toggler span');
const navMenu = document.getElementById('nav-menu');
toggler.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  for(let i = 0; i < span.length; i++) {
    span[i].classList.toggle('rotate');
  }
})