const container = document.querySelector('#use-case-3');
const containerChildren = [...container.children];
const button = containerChildren.find(child => child.localName === 'button')
const modalContainer = containerChildren.find(child => child.localName === 'div');

// Show modal
button.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.stopPropagation();
  modalContainer.classList.toggle('active-div');
}
// Hide modal
modalContainer.addEventListener('click', toggleModal);