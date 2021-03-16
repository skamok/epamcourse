const formElement = document.getElementById('form');

formElement.addEventListener("submit", buttonClick);

const calculate = range();

function buttonClick(event) {
  const firstNumberElement = document.getElementById('firstNumber');
  const secondNumberElement = document.getElementById('secondNumber');
  const resultElement = document.getElementById('result');
  const sourceElement = document.getElementById('source');
  event.preventDefault();
  const check = checkNumbers(firstNumberElement, secondNumberElement);
  if (check !== '') {
    showError(check, resultElement, sourceElement);
  } else {
    const result = calculate(firstNumberElement.value, secondNumberElement.value); // get the sum of the row
    showResult(result, resultElement, sourceElement);
  }
}

function checkNumber(number) {
  const numberTemplate = /^[1-9]\d*$/;
  if (!number.value.match(numberTemplate)) {
    return false;
  }
  return true;
}

function showResult(data, resultElement, sourceElement) {
  try {
    if (!Number.isSafeInteger(data.res)) {
      throw new RangeError(`Result is bigger then ${Number.MAX_SAFE_INTEGER}`)
    }
    resultElement.innerText = data.res;
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
  const memory = [];
  return (n, m) => {
    // check if we calculated it before
    const result = memory.find((cell) => (cell.first === n && cell.second === m));
    if (result) {
      return {res: result.sum, source: 'From memory'}
    }
    const k  = m - n;
    const res = k * (k + 2 * n + 1) / 2;
    // put result to memory
    memory.push({
      first: n,
      second: m,
      sum: res
      });
    return {res, source: 'Calculated'};
  }
}
