const formElement = document.getElementById('form');
const firstNumberElement = document.getElementById('firstNumber');
const secondNumberElement = document.getElementById('secondNumber');
const resultElement = document.getElementById('result');
const sourceElement = document.getElementById('source');

formElement.addEventListener("submit", buttonClick);

const calculate = range();

function buttonClick(event) {
  event.preventDefault();
  const check = checkNumbers(firstNumberElement, secondNumberElement);
  if (check) {
    showError(check, resultElement, sourceElement);
  } else {
    const result = calculate(Number(firstNumberElement.value), Number(secondNumberElement.value)); // get the sum of the row
    showResult(result, resultElement, sourceElement);
  }
}

function checkNumber(number) {
  const numberTemplate = /^[1-9]\d*$/;
  return number.value.match(numberTemplate);
}

function showResult(data, resultElement, sourceElement) {
  try {
    if (!Number.isSafeInteger(data.sum)) {
      throw new RangeError(`Result is bigger then ${Number.MAX_SAFE_INTEGER}`)
    }
    resultElement.innerText = data.sum;
    sourceElement.innerText = data.source;
  } catch (error) {
    resultElement.innerText = error.message;
  }
}

function showError(text, resultElement, sourceElement) {
  resultElement.innerText = text;
  sourceElement.innerText = '';
}

function checkNumbers(firstNumber, secondNumber) {
  if (!checkNumber(firstNumber)) return 'First number is not a natural number.'
  if (!checkNumber(secondNumber)) return 'Second number is not a natural number.'
  if (Number.parseInt(firstNumber.value) > Number.parseInt(secondNumber.value)) return 'First number is greater than second! Reinput values.'
  return '';
}

function range() {
  const memory = new Map();
  return (firstNumber, secondNumber) => {
    // check if we calculated it before
    const key = `${firstNumber}-${secondNumber}`;
    const sumFromMemory = memory.get(key);
    if (sumFromMemory) {
      return {sum: sumFromMemory, source: 'From memory'}
    }
    const sumOfRow = (secondNumber - firstNumber + 1) * (firstNumber + secondNumber) / 2;
    // put result to memory
    memory.set(key, sumOfRow);
    return {sum: sumOfRow, source: 'Calculated'};
  }
}
