"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var baseURL = 'https://api.ratesapi.io/api/';
var summaryURL = 'latest';
var rateURL = 'latest?base=USD&symbols=GBP';
var baseElement = document.getElementById('base');
var symbolElement = document.getElementById('symbol');
var rateElement = document.getElementById('rate');

var fetchSymbols = function fetchSymbols() {
  return fetch(baseURL + summaryURL).then(function (response) {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};

var fetchRate = function fetchRate(base, symbol) {
  return fetch("".concat(baseURL, "latest?base=").concat(base, "&symbols=").concat(symbol)).then(function (response) {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};

var showRate = function showRate() {
  var base = baseElement.options[baseElement.selectedIndex].value;
  var symbol = symbolElement.options[symbolElement.selectedIndex].value;

  if (base === symbol) {
    rateElement.textContent = 1;
  } else {
    fetchRate(base, symbol).then(function (data) {
      var rate = Math.round(Object.values(data.rates)[0] * 100) / 100;
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

fetchSymbols().then(function (data) {
  var symbols = [data.base].concat(_toConsumableArray(Object.keys(data.rates)));
  fillDropdawn(symbols, baseElement, 0);
  fillDropdawn(symbols, symbolElement, 1);
  showRate();
  baseElement.addEventListener('change', calculate);
  symbolElement.addEventListener('change', calculate);
}).catch(function (error) {
  return alert(error);
});
