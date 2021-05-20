// static for constants, dynamic for function  
import {baseURL, summaryURL, API_KEY} from './urls.js';

const fetchDataPath = './fetchData.js';


const baseElement = document.getElementById('base');
const symbolElement = document.getElementById('symbol');
const rateElement = document.getElementById('rate');

const showRate = () => {
  const base = baseElement.options[baseElement.selectedIndex].value;
  const symbol = symbolElement.options[symbolElement.selectedIndex].value;
  if (base === symbol) {
    rateElement.textContent = 1;
  } else {
    const url = `${baseURL}convert?q=${base}_${symbol}&compact=ultra&apiKey=${API_KEY}`;
    import(fetchDataPath)
      .then(({default: fetchData}) => {
        fetchData(url)
        .then((data) => {
          const rate = Math.round(Object.values(data)[0] * 1000) / 1000;
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

  import(fetchDataPath)
  .then(({default: fetchData}) => {
    fetchData(baseURL + summaryURL)
      .then((data) => {
        const symbols = Object.keys(data.results);
        const usdIndex = symbols.indexOf('USD');
        const eurIndex = symbols.indexOf('EUR');
        fillDropdawn(symbols, baseElement, usdIndex);
        fillDropdawn(symbols, symbolElement, eurIndex);
        showRate();
        baseElement.addEventListener('change', calculate);
        symbolElement.addEventListener('change', calculate);
      })
      .catch((error) => alert(error));
  });
  