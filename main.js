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

const project = document.querySelectorAll('.project__banner');
const projectButtons = document.querySelectorAll('.project__buttons');

for (let element = 0; element < project.length; element++) {
  project[element].addEventListener('mousemove', () => {
    projectButtons[element].classList.add('project__buttons--active');
    project[element].classList.add('project__banner--active')
  });

  projectButtons[element].addEventListener('mouseenter', () => {
    projectButtons[element].classList.add('project__buttons--active');
    project[element].classList.add('project__banner--active')
  })

  project[element].addEventListener('mouseleave', () => {
    projectButtons[element].classList.remove('project__buttons--active');
    project[element].classList.remove('project__banner--active')
})
}