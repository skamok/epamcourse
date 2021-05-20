"use strict";

var API_KEY = '65b96a5fe6bc3838312a';
var baseURL = 'https://free.currconv.com/api/v7/';
var summaryURL = "currencies?apiKey=".concat(API_KEY); // Example
// https://free.currconv.com/api/v7/currencies?apiKey=65b96a5fe6bc3838312a
// https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=65b96a5fe6bc3838312a

var baseElement = document.getElementById('base');
var symbolElement = document.getElementById('symbol');
var rateElement = document.getElementById('rate');

function fetchData(url) {
  return fetch(url).then(function (response) {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
}

var showRate = function showRate() {
  var base = baseElement.options[baseElement.selectedIndex].value;
  var symbol = symbolElement.options[symbolElement.selectedIndex].value;

  if (base === symbol) {
    rateElement.textContent = 1;
  } else {
    var url = "".concat(baseURL, "convert?q=").concat(base, "_").concat(symbol, "&compact=ultra&apiKey=").concat(API_KEY);
    fetchData(url).then(function (data) {
      var rate = Math.round(Object.values(data)[0] * 1000) / 1000;
      rateElement.textContent = rate;
    }).catch(function (error) {
      return rateElement.textContent = error;
    });
  }
};

var fillDropdawn = function fillDropdawn(data, dropdawn, selected) {
  data.forEach(function (symbol, index) {
    var option = new Option(symbol, symbol);
    if (index === selected) option.selected = true;
    dropdawn.add(option);
  });
};

var calculate = function calculate() {
  showRate();
};

fetchData(baseURL + summaryURL).then(function (data) {
  var symbols = Object.keys(data.results);
  var usdIndex = symbols.indexOf('USD');
  var eurIndex = symbols.indexOf('EUR');
  fillDropdawn(symbols, baseElement, usdIndex);
  fillDropdawn(symbols, symbolElement, eurIndex);
  showRate();
  baseElement.addEventListener('change', calculate);
  symbolElement.addEventListener('change', calculate);
}).catch(function (error) {
  return alert(error);
});
