function display(element, elementClass) {
  element.classList.toggle(`${elementClass}--active`);
}

export default display;