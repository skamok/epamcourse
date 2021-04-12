import DOMElement from './DOMElement.js';
import Player from './Player.js';

export default class Score {
  constructor() {
    this.init();
  }

  init() {
    this.playerZero = new Player('zero');
    this.playerCross = new Player('cross');
    this.elementMessage = DOMElement.create('p', 'score__message');
    this.generate();
  }

  generate() {
    this.elementDiv = DOMElement.create('div', 'main__score score',
      [
        this.playerZero.elementDiv,
        this.elementMessage,
        this.playerCross.elementDiv
      ]);
  }

  makeActive(player) {
    if (player === 'zero') {
      this.playerZero.startRotate();
      this.playerCross.stopRotate();
    } else {
      this.playerZero.stopRotate();
      this.playerCross.startRotate();
    }
  }

  update(symbol) {
    this.playerZero.stopRotate();
    this.playerCross.stopRotate();
    if (symbol === 'draw') {
      this.showMessage('DRAW!');
    } else {
      this.showMessage(`${symbol} wins!`);
      if (symbol === 'zero') {
        this.playerZero.incrementPoint(1);
      } else {
        this.playerCross.incrementPoint(1);
      }
    }
  }

  showMessage(message) {
    this.elementMessage.textContent = message;
  }
}
