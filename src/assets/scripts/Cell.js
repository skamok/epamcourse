export default class Cell {
  constructor(id) {
    this.id = id;
    this.type = null;
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
    if (type === 'zero' && (this.type === null)) {
      this.type = 'zero';
      this.elementIcon.classList.add('fa-circle');
    }
  }
}