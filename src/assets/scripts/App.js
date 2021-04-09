import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

export default class App {
  constructor(bodyElement) {
    this.bodyElement = bodyElement;
  }

  init() {
    this.generateHeader('Tic Tac Toe');
    this.generateMain();
    this.generateFooter();
  }

  generateHeader(caption) {
    this.bodyElement.prepend(Header.generate(caption));
  }

  generateMain() {
    this.bodyElement.append((new Main()).elementMain);
  }

  generateFooter() {
    this.bodyElement.append(Footer.generate());
  }
}
