import DOMElement from './DOMElement.js';

export default class Header {
  static generate(caption) {
    const captionArray = caption.split(' ');
    return DOMElement.create(
      'header',
      'header',
      DOMElement.create(
        'h1',
        'header__caption',
        [
          DOMElement.create('span', 'header__caption_zero', `${captionArray[0]} `),
          DOMElement.create('span', 'header__caption', `${captionArray[1]} `),
          DOMElement.create('span', 'header__caption_cross', `${captionArray[2]} `)
        ]
      )
    );
  }
}
