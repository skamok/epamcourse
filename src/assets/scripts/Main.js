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
    this.isGameFinished = false;
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
    this.score.makeActive(this.turn);
    this.field.elementDiv.addEventListener('click', this.onFieldClick);
    this.buttonElement.addEventListener('click', this.onBtnClick);
    this.generateElements();
  }

  generateElements() {
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
      this.score.update(gameFinish.symbol);
      this.endGame(gameFinish);
    }
  }

  gameComplete(coordinates) {
    const combination = new Array(3);
    const res = {
      symbol: this.turn,
      combination
    };
    this.fieldState[coordinates.x][coordinates.y] = this.turn;
    // columns
    for (let x = 0; x < 3; x++) {
      if (this.fieldState[x][coordinates.y] !== this.turn) break;
      combination[x] = [x, coordinates.y];
      if (x === 2) {
        return res;
      }
    }
    // rows
    for (let y = 0; y < 3; y++) {
      if (this.fieldState[coordinates.x][y] !== this.turn) break;
      combination[y] = [coordinates.x, y];
      if (y === 2) {
        return res;
      }
    }
    // diagonal left-right
    if (coordinates.x === coordinates.y) {
      for (let x = 0; x < 3; x++) {
        if (this.fieldState[x][x] !== this.turn) break;
        combination[x] = [x, x];
        if (x === 2) return res;
      }
    }
    // diagonal right-left
    if ((coordinates.x + coordinates.y) === 2) {
      for (let x = 0; x < 3; x++) {
        if (this.fieldState[x][2 - x] !== this.turn) break;
        combination[x] = [x, 2 - x];
        if (x === 2) return res;
      }
    }

    if (!this.fieldState.flat().some((element) => element === 0)) {
      res.symbol = 'draw';
      return res;
    }

    return false;
  }

  endGame(state) {
    if (state.symbol !== 'draw') this.showCombination(state.combination);
    this.field.elementDiv.removeEventListener('click', this.onFieldClick);
    this.isGameFinished = true;
  }

  showCombination(combination) {
    combination.forEach((element) => {
      const cell = this.field.cells.find(
        (elem) => elem.coordinates.x === element[0] && elem.coordinates.y === element[1]
      );
      cell.startRotate();
    });
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

  onBtnClick = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.fieldState[i][j] = 0;
      }
    }
    this.field.cells.forEach((cell) => {
      cell.reset();
    });
    this.score.makeActive('zero');
    this.turn = 'zero';
    if (this.isGameFinished) {
      this.isGameFinished = false;
      this.field.elementDiv.addEventListener('click', this.onFieldClick);
    }
    this.score.showMessage('');
  }
}
