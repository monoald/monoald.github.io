import display from './utils/display.js';
import showSelectProjects from './utils/projectsSelect.js';

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

// Select project
const buttonContainer = document.querySelector('#skills-container');

buttonContainer.addEventListener('click', showSelectProjects);