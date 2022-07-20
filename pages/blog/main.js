import display from '../../utils/display.js';

const tags = document.getElementById('tags');
const tagsClass = tags.className;
const tagButton = document.getElementById('tags-button');
const tagsClose = document.getElementById('close-tags');

tagButton.addEventListener('click', () => { 
  display(tags, tagsClass);
});
tagsClose.addEventListener('click', () => { 
  display(tags, tagsClass);
});