import DOMElement from './DOMElement.js';

export default class Header {
  static generate(caption) {
    return DOMElement.create(
      'header',
      'header',
      DOMElement.create(
        'h1',
        'header__caption',
        caption
      )
    );
  }
}
