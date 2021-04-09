import DOMElement from './DOMElement.js';
import Cell from './Cell.js';

export default class Field {
  constructor() {
    this.init();
  }

  init() {
    this.cells = Array.from({ length: 9 }, (_, i) => new Cell(i));
    this.elementDiv = DOMElement.create('div', 'main__game game');
    this.cells.forEach((cell) => this.elementDiv.append(cell.elementDiv));
  }
}
