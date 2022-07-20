function display(element, elementClass) {
  const isActive = document.querySelector(`.${elementClass}--active`);
  if (isActive) {
    element.classList.remove(`${elementClass}--active`);
  } else {
    element.classList.add(`${elementClass}--active`);
  }
}

export default display;