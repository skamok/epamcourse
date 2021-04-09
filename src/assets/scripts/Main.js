import DOMElement from './DOMElement.js';
import Field from './Field.js';
import Score from './Score.js';
import Button from './Button.js';

export default class Main {
  constructor() {
    this.init();
  }

  init() {
    this.state = new Array(3);
    for (let i = 0; i < 3; i++) {
      this.state[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        this.state[i][j] = 0;
      }
    }
    this.field = new Field();
    this.score = new Score();
    this.buttonElement = Button.generate();
    this.field.elementDiv.addEventListener('click', this.onFieldClick);
    this.generate();
  }

  generate() {
    this.elementMain = DOMElement.create('main', 'main',
      [
        this.field.elementDiv,
        this.score.elementDiv,
        this.buttonElement
      ]);
  }

  onFieldClick = (event) => {
    let eventElement = null;
    event.preventDefault();
    if (event.target.parentElement.tagName === 'MAIN') {
      return;
    }
    if (event.target.tagName === 'I') {
      eventElement = event.target.parentElement;
    } else {
      eventElement = event.target;
    }
    const cell = this.field.cells.find((element) => element.id === parseInt(eventElement.id, 10));
    cell.update('zero');
  }
}
