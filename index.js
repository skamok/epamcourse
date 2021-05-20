const API_KEY = '65b96a5fe6bc3838312a';
const baseURL = 'https://free.currconv.com/api/v7/';
const summaryURL = `currencies?apiKey=${API_KEY}`;
// Example
// https://free.currconv.com/api/v7/currencies?apiKey=65b96a5fe6bc3838312a
// https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=65b96a5fe6bc3838312a



const baseElement = document.getElementById('base');
const symbolElement = document.getElementById('symbol');
const rateElement = document.getElementById('rate');

function fetchData(base, symbol) {
  if (arguments.length) {
    return fetch(`${baseURL}convert?q=${base}_${symbol}&compact=ultra&apiKey=${API_KEY}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
  });
  }
  return fetch(baseURL + summaryURL)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(response.statusText);
  });  
}

const showRate = () => {
  const base = baseElement.options[baseElement.selectedIndex].value;
  const symbol = symbolElement.options[symbolElement.selectedIndex].value;
  if (base === symbol) {
    rateElement.textContent = 1;
  } else {
    fetchData(base, symbol)
    .then((data) => {
      const rate = Math.round(Object.values(data)[0] * 1000) / 1000;
      rateElement.textContent = rate;
    })
    .catch((error) => rateElement.textContent = error);
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

fetchData()
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
  