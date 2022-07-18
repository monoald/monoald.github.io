const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const menuClose = document.getElementById('menu-close')

menuIcon.addEventListener('click', displayMenu);
menuClose.addEventListener('click', displayMenu);


function displayMenu() {
  const isActive = document.querySelector('.menu-float--active');

  if (isActive) {
    menu.setAttribute('class', 'menu-float');
    menuIcon.setAttribute('class', 'menu icon-menu')
  } else {
    menu.setAttribute('class', 'menu-float menu-float--active')
    menuIcon.setAttribute('class', 'menu icon-menu menu--inactive')
  }
}