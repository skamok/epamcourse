export default class Entity {
  constructor (name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    !value.length ? alert('Name is empty!') : this._name = value;
  }
}