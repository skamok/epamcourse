import DOMElement from './DOMElement.js';

export default class Table {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.init();
  }

  init() {
    this.sort = { id: 'color', direct: 'asc' };
    this.sortArrowUp = DOMElement.create('i', 'fas fa-caret-up');
    this.sortArrowDown = DOMElement.create('i', 'fas fa-caret-down');
    this.blank = DOMElement.create('i', 'fas fa-caret-down hidden');
    this.table = DOMElement.create('table', 'main__table table',
      DOMElement.create('caption', 'table__caption', 'Statistic'),
      this.parent);
    this.table.addEventListener('click', this.tableClick);
    this.genereate();
  }

  genereate() {
    const tableHeadersRow = DOMElement.create('tr', 'table__header-row', null, this.table);
    const headersNames = ['Color', 'Wave length'];
    for (let i = 0; i < headersNames.length; i++) {
      let tableHeader = null;
      let sortClass = null;
      if (this.sort.id === headersNames[i].toLowerCase()) {
        if (this.sort.direct === 'asc') {
          sortClass = this.sortArrowUp;
        } else {
          sortClass = this.sortArrowDown;
        }
        tableHeader = DOMElement.create('th', 'table__header', sortClass, tableHeadersRow,
          ['data-name', headersNames[i].toLowerCase()], ['data-sort', this.sort.direct],
          ['data-row', 0], ['data-cell', 0]);
      } else {
        sortClass = this.blank;
        tableHeader = DOMElement.create('th', 'table__header', sortClass, tableHeadersRow,
          ['data-name', headersNames[i].toLowerCase()], ['data-sort', 'undef'],
          ['data-row', 0], ['data-cell', 1]);
      }
      tableHeader.innerHTML = `${headersNames[i]} ${tableHeader.innerHTML}`;
    }

    this.data.forEach((element, index) => {
      const color = DOMElement.create('td', 'table__cell', element.color, null,
        ['data-row', index + 1], ['data-cell', 0]);
      const wave = DOMElement.create('td', 'table__cell', element.wave.toString(), null,
        ['data-row', index + 1], ['data-cell', 1]);
      const row = DOMElement.create('tr', 'table__row', [color, wave], this.table);
    });
  }

  tableClick = (event) => {
    const { row, cell } = event.target.dataset;
    if (row) {
      console.log(this.table.rows[row].cells[cell].innerHTML  = '<input type="text"></input>');
    } else {
      const { name, sort } = event.target.dataset;
    }
  }
}
