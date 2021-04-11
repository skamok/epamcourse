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
    const symbolClass = this.type === 'zero' ? 'fas fa-circle-notch' : 'fas fa-times';
    const colorClass = this.type === 'zero' ? 'score__zero' : 'score__cross';
    this.elementSymbol = DOMElement.create('i', symbolClass);
    this.elementPoints = DOMElement.create('p', 'score__number', '0');
    this.elementArea = DOMElement.create('div', 'score__area', this.elementPoints);
    this.elementDiv = DOMElement.create('div', 'score__player',
      [
        DOMElement.create('p', colorClass, this.elementSymbol),
        this.elementArea
      ]);
  }

  startRotate() {
    this.elementSymbol.classList.add('fa-spin');
  }

  stopRotate() {
    this.elementSymbol.classList.remove('fa-spin');
  }
}
