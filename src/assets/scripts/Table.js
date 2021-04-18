import DOMElement from './DOMElement.js';

export default class Table {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    this.init();
  }

  init() {
    // cell with data values in click moment
    this.selectedRecord = null;
    this.selectedRecordValue = null;
    // sort options
    this.sort = { 
      id: 'color', 
      direct: 'asc'
    };
    // arrows in header of table
    this.sortArrowUp = DOMElement.create('i', 'fas fa-caret-up');
    this.sortArrowDown = DOMElement.create('i', 'fas fa-caret-down');
    // invisible arrow
    this.blank = DOMElement.create('i', 'fas fa-caret-down hidden');
    // edit for color wave length
    this.input = DOMElement.create('input', 'table__input', null, null, ['placeholder', 'input number']);
    this.input.addEventListener('keypress', this.inputHandler);

    this.genereate();
  }

  genereate() { // Table randering
    // if table exist remove it
    if (this.table) {
      this.table.parentNode.removeChild(this.table)
    };

    this.table = DOMElement.create('table', 'main__table table',
      DOMElement.create('caption', 'table__caption', 'Rainbow'),
      this.parent);
    this.table.addEventListener('click', this.tableClick);

    // render header of the table
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

    // render data rows of table first sort data in array
    this.sortData();
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
    if (parseInt(row, 10)) { // row with data handler
      if (parseInt(cell, 10)) {
        this.selectedRecord = row;
        this.selectedRecordValue = event.target.textContent;
        this.showInput(row, cell)
      };
    } else { // table header handler
      let target = null;
      if (event.target.tagName === 'I') {
        target = event.target.parentNode;
      } else {
        target = event.target;
      }
      const { name, sort } = target.dataset;
      console.log(this.sort);
      this.sort.id = name;
      if (sort === 'undef') {
        this.sort.direct = 'asc';
      } else {
        if (this.sort.direct === 'asc') {
          this.sort.direct = 'dsc';
        } else {
          this.sort.direct = 'asc';
        }
      }
      console.log(this.sort);
      this.genereate();
    }
  }

  showInput(row, cell) {
    const value = this.table.rows[row].cells[cell].textContent;
    this.table.rows[row].cells[cell].textContent = '';
    this.input.value = value;
    this.table.rows[row].cells[cell].appendChild(this.input);
    this.input.focus();
    this.input.select();
    this.input.addEventListener('blur', this.inputHandler);
  }

  inputHandler = (event) => {
    const re = /^\d{1,}$/;
    if (
        ((event.type === 'keypress') && ((event.code === 'Enter') || (event.code === 'NumpadEnter'))) ||
        (event.type === 'blur') 
      ) 
      {
        // remove listener for prevent double triggering
        if (event.type === 'keypress') this.input.removeEventListener('blur', this.inputHandler);

        if (this.input.value.search(re) > -1) {
          if ((this.selectedRecordValue !== this.input.value)) {
            this.data[this.selectedRecord - 1].wave = parseInt(this.input.value, 10);
            this.genereate();
          } else {
            // prevent rerender table if value not changing
            this.input.parentNode.textContent = this.selectedRecordValue;
          }
        } else {
          // if user value not a number rewrite it with previous value
          if (isNaN(parseInt(this.input.value))) this.input.parentNode.textContent = this.selectedRecordValue;
        }
      }
  }

  sortData() {
    switch (this.sort.id) {
      case 'color':
        this.data.sort((a, b) => {
          if (a.color > b.color) {
            return this.sort.direct === 'asc' ? 1 : -1;
          }
          if (a.color < b.color) {
            return this.sort.direct === 'asc' ? -1 : 1;
          }
          return 0;
        })
      break;
      
      case 'wave length':
        this.data.sort((a, b) => {
          if (a.wave > b.wave) {
            return this.sort.direct === 'asc' ? 1 : -1;
          }
          if (a.wave < b.wave) {
            return this.sort.direct === 'asc' ? -1 : 1;
          }
          return 0;
        })
      break;
    
      default:
      break;
    }
  }
}
