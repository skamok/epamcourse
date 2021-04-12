import DOMElement from './DOMElement.js';

export default class Footer {
  static generate() {
    return DOMElement.create(
      'footer',
      'footer',
      [
        DOMElement.create('i', 'footer__icon fab fa-github'),
        DOMElement.create('a', 'footer__link', 'Stanislau Karshankou', null,
          ['href', 'https://github.com/skamok'],
          ['target', '_blanc'])
      ]
    );
  }
}
