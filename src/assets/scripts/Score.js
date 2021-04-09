import DOMElement from './DOMElement.js';
import Player from './Player.js';

export default class Score {
  constructor() {
    this.init();
  }

  init() {
    this.playerZero = new Player('zero');
    this.playerCross = new Player('cross');
    this.generate();
  }

  generate() {
    this.elementDiv = DOMElement.create('div', 'main__score score',
      [
        this.playerZero.elementDiv,
        this.playerCross.elementDiv
      ]);
  }
}
