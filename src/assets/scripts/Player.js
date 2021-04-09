import DOMElement from './DOMElement.js';

export default class Player {
  constructor(type) {
    this.type = type;
    this.init();
  }

  init() {
    this.points = 0;
    this.generate();
  }

  generate() {
    const symbolClass = this.type === 'zero' ? 'fas fa-circle' : 'fas fa-times';
    const colorClass = this.type === 'zero' ? 'score__zero' : 'score__cross';
    this.elementPoints = DOMElement.create('p', 'score__number', '0');
    this.elementArea = DOMElement.create('div', 'score__area', this.elementPoints);
    this.elementDiv = DOMElement.create('div', 'score__player',
      [
        DOMElement.create('p', colorClass, DOMElement.create('i', symbolClass)),
        this.elementArea
      ]);
  }
}
/*
  <div class="score__player">
    <p class="score__cross"><i class="fas fa-times"></i></p>
    <div class="score__area">
      <p class="score__number" id="scoreCross">3</p>
    </div>
  </div>
*/
