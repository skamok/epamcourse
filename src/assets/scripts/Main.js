import DOMElement from './DOMElement.js';
import Field from './Field.js';
import Score from './Score.js';
import Button from './Button.js';

export default class Main {
  constructor() {
    this.init();
  }

  init() {
    this.fieldState = new Array(3);
    this.turn = 'zero';
    for (let i = 0; i < 3; i++) {
      this.fieldState[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        this.fieldState[i][j] = 0;
      }
    }
    this.field = new Field();
    this.score = new Score();
    this.buttonElement = Button.generate();
    this.score.makeActive('zero');
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
    if (!cell.type) this.gameProcess(cell);
  }

  gameProcess(cell) {
    cell.update(this.turn);
    const gameFinish = this.gameComplete(cell.coordinates);
    if (!gameFinish) {
      this.changeTurn();
    } else {
      console.log(`${gameFinish} wins!`);
    }
  }

  gameComplete(coordinates) {
    this.fieldState[coordinates.x][coordinates.y] = this.turn;

    for (let x = 0; x < 3; x++) {
      if (this.fieldState[x][coordinates.y] !== this.turn) break;
      if (x === 2) return this.turn;
    }

    for (let y = 0; y < 3; y++) {
      if (this.fieldState[coordinates.x][y] !== this.turn) break;
      if (y === 2) return this.turn;
    }

    if (coordinates.x === coordinates.y) {
      for (let x = 0; x < 3; x++) {
        if (this.fieldState[x][x] !== this.turn) break;
        if (x === 2) return this.turn;
      }
    }

    if ((coordinates.x + coordinates.y) === 2) {
      for (let x = 0; x < 3; x++) {
        if (this.fieldState[x][2 - x] !== this.turn) break;
        if (x === 2) return this.turn;
      }
    }

    if (!this.fieldState.flat().some((element) => element === 0)) return 'draw';

    return false;
  }

  changeTurn() {
    if (this.turn === 'zero') {
      this.score.makeActive('cross');
      this.turn = 'cross';
    } else {
      this.score.makeActive('zero');
      this.turn = 'zero';
    }
  }
}
