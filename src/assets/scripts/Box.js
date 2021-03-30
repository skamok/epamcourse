import Entity from './Entity.js';

class Box extends Entity {
  constructor(name, volume) {
    super(name);
    this.volume = volume;
    this.things = [];
    console.log(`box ${name} created.`);
  }

  get volume() {
    return this._volume;
  }

  set volume(value) {
    if (Number.parseFloat(value)) {
      this._volume = value;
    } else {
      console('Volume is not a number set a default volume = 10');
      this._volume = 10;
    }
  }

  addStuff(stuff) {
    const currentVolume = this.things.reduce((acc, cell) => acc + cell.weight, 0);
    if ((stuff.weight + currentVolume) <= this.volume) {
      this.things.push(stuff);
      return `${stuff.name} add in ${this.name}`;
    }
    return `Error. Not enough place in ${this.name} for ${stuff.name}`;
  }

  deleteStuff(stuff) {
    const stuffIndex = this.things.findIndex((element) => element.name === stuff.name);
    if (stuffIndex > -1) {
      this.things.splice(stuffIndex, 1);
    }
  }
}

export default Box;
