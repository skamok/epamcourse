import Cell from './Cell.js';

export default class App {
  constructor(mainElement, scoreElements) {
    this.mainElement = mainElement;
    this.scoreElements = scoreElements;
    this.state = new Array(3);
  }

  init() {
    this.scoreElements.zero.textContent = 0;
    this.scoreElements.cross.textContent = 0;
    for (let i = 0; i < 3; i++) {
      this.state[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        this.state[i][j] = 0;
      }
    }
    this.cells = Array.from({length: 9}, (_, i) => new Cell(i));
    this.generateField();
  }

  generateField() {
    this.field = document.createElement('div');
    this.field.className = 'main__game game';
    this.cells.forEach((cell) => this.field.append(cell.elementDiv));
    this.field.addEventListener('click', this.onFieldClick);
    this.mainElement.prepend(this.field);
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
    const cell = this.cells.find((element) => element.id === parseInt(eventElement.id, 10));
    cell.update('zero');
  }
}