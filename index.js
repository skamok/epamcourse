// static for constants, dynamic for functions  
import {baseURL, summaryURL} from './urls.js';

const fetchRatePath = './fetchRate.js';
const fetchSymbolsPath = './fetchSymbols.js';

const baseElement = document.getElementById('base');
const symbolElement = document.getElementById('symbol');
const rateElement = document.getElementById('rate');

const showRate = () => {
  const base = baseElement.options[baseElement.selectedIndex].value;
  const symbol = symbolElement.options[symbolElement.selectedIndex].value;
  if (base === symbol) {
    rateElement.textContent = 1;
  } else {
    import(fetchRatePath).then(({default: fetchRate}) => {
      fetchRate(baseURL, base, symbol)
      .then((data) => {
        const rate = Math.round(Object.values(data.rates)[0] * 100) / 100;
        rateElement.textContent = rate;
      })
      .catch((error) => rateElement.textContent = error);
    });
  }
}

const fillDropdawn = (data, dropdawn, selected) => {
  data.forEach((symbol, index) => {
    const option = new Option(symbol, symbol);
    if (index === selected) option.selected = true;
    dropdawn.add(option);
  });
}

const calculate = () => {
  showRate();
}

import(fetchSymbolsPath).then(({default: fetchSymbols}) => {
  fetchSymbols(baseURL, summaryURL)
  .then((data) => {
    const symbols = [data.base, ...Object.keys(data.rates)];
    fillDropdawn(symbols, baseElement, 0);
    fillDropdawn(symbols, symbolElement, 1);
    showRate();
    baseElement.addEventListener('change', calculate);
    symbolElement.addEventListener('change', calculate);
  })
  .catch((error) => alert(error));
});
  