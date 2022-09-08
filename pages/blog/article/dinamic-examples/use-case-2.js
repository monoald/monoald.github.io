const container = document.querySelector('#use-case-2');
const list = container.lastElementChild;
const items = [...list.children];
const buttons = [];

items.map(item => {
  const itemChildren = [...item.children];
  const button = itemChildren.find(child => child.localName === 'button')
  buttons.push(button);
})


// Add event to every list item
items.map( item => {
  item.addEventListener('click', seeTrailer);
});

function seeTrailer() {
  // Open trailer
  window.open('https://www.youtube.com/watch?v=KPLWWIOCOOQ', '', 'width=600,height=340');
}

// Add event to every button
buttons.map( button => {
  button.addEventListener('click', checkItem);
});

function checkItem(event) {
  event.stopPropagation(); // <-- Solution
  // Open trailer
  const item = this.parentElement;
  item.classList.toggle('list--check');
  console.log(item);
}

