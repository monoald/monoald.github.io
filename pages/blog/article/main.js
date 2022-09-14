import clipboardLink from "../../../utils/clipboardLink.js";
import toggleModal from "../../../utils/toggleModal.js";
import display from '../../../utils/display.js';

// Toggle Menu
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

const clipIcon = document.querySelector('#clip-icon');

clipIcon.addEventListener('click', () => {
  clipboardLink();
  toggleModal('#link-copied');
});