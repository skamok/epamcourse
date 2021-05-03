const baseURL = 'https://api.ratesapi.io/api/';
const summaryURL = 'latest';
const rateURL = 'latest?base=USD&symbols=GBP';

const baseElement = document.getElementById('base');
const symbolElement = document.getElementById('symbol');
const rateElement = document.getElementById('rate');

const fetchSymbols = () => {
  return fetch(baseURL + summaryURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
}

const fetchRate = (base, symbol) => {
  return fetch(`${baseURL}latest?base=${base}&symbols=${symbol}`)
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
    fetchRate(base, symbol)
    .then((data) => {
      const rate = Math.round(Object.values(data.rates)[0] * 100) / 100;
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

fetchSymbols()
  .then((data) => {
    const symbols = [data.base, ...Object.keys(data.rates)];
    fillDropdawn(symbols, baseElement, 0);
    fillDropdawn(symbols, symbolElement, 1);
    showRate();
    baseElement.addEventListener('change', calculate);
    symbolElement.addEventListener('change', calculate);
  })
  .catch((error) => alert(error));
  