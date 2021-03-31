export default class Entity {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (!value.length) {
      alert('Name is empty, set a default name entity');
      this._name = 'entity';
    }
    this._name = value;
  }
}