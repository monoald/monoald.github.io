import display from './utils/display.js';

const menu = document.getElementById('menu');
const menuClass = menu.className;
const menuIcon = document.getElementById('menu-icon');
const menuClose = document.getElementById('menu-close')

menuIcon.addEventListener('click', () => { 
  display(menu, menuClass);
});
menuClose.addEventListener('click', () => { 
  display(menu, menuClass);
});