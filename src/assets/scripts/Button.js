import DOMElement from './DOMElement.js';

export default class Button {
  static generate() {
    return DOMElement.create('button', 'main__button button', 'Play again');
  }
}
