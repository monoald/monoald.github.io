import Example from '../../../../utils/examples.js'

const container = document.querySelector('#example-2');
const example = new Example(container);

const nodes = example.getAllNodes();

// Add an event to the 3 elements to know its current phase
nodes.map( node => {
  // Enabling Capturing Propagation - Disabling Bubbling Propagation
  node.addEventListener('click', showPhase, true);
});

function showPhase (event) {
  const phase = event.eventPhase;
  let phaseName;

  // Validate phase type
  if (phase === 1) {
    phaseName = 'Capturing'
  } else if (phase === 2) {
    phaseName = 'Target'
  } else if (phase === 3) {
    phaseName = 'Bubbling'
  }
  alert(`${this.classList[1]}: ${phaseName} Phase`)
}

// Add main event
const anchor = example.getBottomNode();
anchor.addEventListener('click', sayHi);

function sayHi() {
alert('Hi');
}