import Entity from './Entity.js';
import Box from './Box.js';

class User extends Entity {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
    this.boxes = [];
    console.log(`user ${name} ${lastName} created.`);
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (value.length) {
      this._lastName = value;
    } else {
      console.log('Last Name is empty, set a default Last Name = Smith');
      this._lastName = 'Smith';
    }
  }

  createBox(name, volume) {
    this.boxes.push(new Box(name, volume));
  }

  deleteBox(name) {
    const boxIndex = this.boxes.findIndex((element) => element.name === name);
    if (boxIndex > -1) {
      this.boxes.splice(boxIndex, 1);
      console.log(`${name} deleted.`);
    }
  }

  addStuff(boxName, stuff) {
    const boxIndex = this.boxes.findIndex((element) => element.name === boxName);
    if (boxIndex > -1) {
      console.log(this.boxes[boxIndex].addStuff(stuff));
    } else {
      console.log(`${boxName} not faund`);
    }
  }

  getAllStuff() {
    const all = this.boxes.reduce((acc, box) => {
      const things = box.things.reduce((str, stuff) => `${str}${stuff.name} `, '');
      return acc + things;
    }, '');
    return `${this.name} ${this.lastName} has ${all}`;
  }
}

export default User;
