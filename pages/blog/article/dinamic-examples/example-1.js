import Example from '../../../../utils/examples.js'

const container = document.querySelector('#example-1');
const example = new Example(container);

const bottomNode = example.getBottomNode();
bottomNode.addEventListener('click', sayHi);

function sayHi() {
alert('Hi');
}