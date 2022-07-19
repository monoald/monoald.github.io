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

const tags = document.getElementById('tags');
const tagsClass = tags.className;
const tagButton = document.getElementById('tags-button');
const tagsClose = document.getElementById('close-tags');

tagButton.addEventListener('click', () => { 
  display(tags, tagsClass);
});
tagsClose.addEventListener('click', () => { 
  display(tags, tagsClass);
})

function display(element, elementClass) {
  const isActive = document.querySelector(`.${elementClass}--active`);
  if (isActive) {
    element.classList.remove(`${elementClass}--active`);
  } else {
    element.classList.add(`${elementClass}--active`);
  }
}