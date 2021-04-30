const baseURL = 'https://api.ratesapi.io/api/';
const summaryURL = 'latest';
const rateURL = 'latest?base=USD&symbols=GBP';

const baseElement = document.getElementById('base');
const symbolElement = document.getElementById('symbol');

const fetchSymbols = () => {
  return fetch(baseURL + summaryURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
}

const fillDropdawn = (data, dropdawn) => {
  data.forEach((symbol) => {
    const liElement = document.createElement('li');
    liElement.className = 'dropdown-item';
    liElement.textContent = symbol;
    dropdawn.append(liElement);
  });
}

const calculate = () => {
  console.log('change');
}

fetchSymbols()
  .then((data) => {
    const symbols = [data.base, ...Object.keys(data.rates)];
    fillDropdawn(symbols, baseElement);
    fillDropdawn(symbols, symbolElement);
    baseElement.addEventListener('change', calculate);
    symbolElement.addEventListener('change', calculate);
  })
  .catch((error) => {
    console.log(error);
  });