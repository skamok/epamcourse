export default class Cell {
  constructor(id) {
    this.id = id;
    this.type = null;
    this.coordinates = Cell.calcCoordinates(id);
    this.generateElements();
  }

  generateElements() {
    this.elementDiv = document.createElement('div');
    this.elementDiv.className = 'game__cell';
    this.elementDiv.id = this.id;
    this.elementIcon = document.createElement('i');
    this.elementIcon.className = 'game__icon fas';
    this.elementDiv.appendChild(this.elementIcon);
  }

  update(type) {
    if (this.type === null) {
      if (type === 'zero') {
        this.type = 'zero';
        this.elementIcon.classList.add('game__icon_zero', 'fa-circle-notch');
      } else {
        this.type = 'cross';
        this.elementIcon.classList.add('game__icon_cross', 'fa-times');
      }
    }
  }

  static calcCoordinates(number) {
    const row = Math.trunc(number / 3);
    const column = row === 0 ? number : number % (row * 3);
    return {
      x: row,
      y: column
    };
  }
}
