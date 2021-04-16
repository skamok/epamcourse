import { colors } from './Colors.js';
import Table from './Table.js';

export default class App {
  constructor(mainElement) {
    this.mainElement = mainElement;
  }

  init() {
    this.data = colors;
    this.table = new Table(this.mainElement, this.data);
  }
}
