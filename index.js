const BtnMemoryLeak = document.getElementById('leak');
const BtnStackOverflow = document.getElementById('overflow');
const elementNodes = document.getElementById('nodes');

const memoryArray = [];
const stringLength = 50000;

BtnStackOverflow.addEventListener('click', loop1);
BtnMemoryLeak.addEventListener('click', leakMemory);

function loop1() {
  loop2();
}

function loop2() {
  loop1();
}

function leakMemory() {
  memoryArray.push(new Array(stringLength).join('x'));
  generateNodes();
}

function generateNodes() {
  for (let i = 0; i < 1000; i++) {
    const element = document.createElement('div');
    const dateTime = new Date();
    if (i === 999) element.innerText = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} Memory Array size = ${memoryArray.length * stringLength}`;
    elementNodes.appendChild(element);
  }
}