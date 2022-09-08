const container = document.querySelector('#use-case-4');
const containerChildren = [...container.children];
const button = containerChildren.find(child => child.localName === 'button')
const modalContainer = containerChildren.find(child => child.localName === 'div');
const modal = modalContainer.firstElementChild;

// Show modal
button.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.stopPropagation();
  modalContainer.classList.toggle('active-div');
}
// Hide modal
modalContainer.addEventListener('click', toggleModal);
modal.addEventListener('click', event => event.stopPropagation()); //<--Solution