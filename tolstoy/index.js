const text = document.getElementById('floatingTextarea2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const initialArray = [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 
  50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 
  48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 
  46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59];

window.addEventListener('load', onWindowLoad);

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  if (!text.value.length) {
    showResult('Please, input array of integer numbers');
    return;
  }
  const array = text.value.trim().split(',').map(element => parseInt(element, 10));
  const map = array.reduce((acc,  element) => {
    if (acc.has(element)) {
      acc.set(element, acc.get(element) + 1);
    } else {
      acc.set(element, 1);
    }
    return acc;
  }, new Map());
  const resultArray = Array.from(map.entries()).sort(compare);
  showResult(resultArray);
}

function onWindowLoad() {
  text.value = initialArray.join(', ');
}

function showResult(data) {
  if (Array.isArray(data)) {
    const array = data.map(element => `${element[0]} => ${element[1]}`)
    const str = array.join('\n');
    result.innerText = str;
  } else {
    result.innerText = data;
  }
}

function compare(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  if (a[1] === b[1]) {
    return 0;
  }
}