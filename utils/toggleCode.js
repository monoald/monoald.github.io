import display from "./display.js";

const content = document.querySelector('#content');

content.addEventListener('click', toggle);

function toggle(event) {
  if (event.target.localName === 'button') {
    const buttonsContainer = event.target.parentElement;
    const buttons = [...buttonsContainer.children];
    const codes = [...buttonsContainer.nextElementSibling.children];

    const previousButton = buttons.find(child => child.classList.contains('code__button--active'));
    const previousCode = codes.find(child => child.classList.contains(`code-${previousButton.value}`));

    const currentButton = event.target;
    const currentCode = codes.find(child => child.classList.contains(`code-${currentButton.value}`))

    previousButton.classList.toggle('code__button--active');
    previousCode.classList.toggle('code__element--active')

    currentButton.classList.toggle('code__button--active');
    currentCode.classList.toggle('code__element--active');
  }
}
