import Entity from './Entity.js';

class Stuff extends Entity {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
    console.log(`stuff ${name} created.`);
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    if (Number.parseFloat(value)) {
      this._weight = value;
    } else {
      alert('Weight not a number set a default price = 1');
      this._weight = 1;
    }
  }
}

export default Stuff;
