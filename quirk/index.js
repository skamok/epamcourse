const MAX_DELAY = 3000;

const inputElement = document.getElementById('polish');
const formElement = document.getElementById('form');
const stepsElement = document.getElementById('steps');
const resultElement = document.getElementById('result');

const rnd = () => Math.floor(Math.random() * MAX_DELAY + 1);

const plus = (x, y) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x + y), rnd());
  })
};

const minus = (x, y) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x - y), rnd());
  })
};

const multiply = (x, y) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x * y), rnd());
  })
};

const devide = (x, y) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x / y), rnd());
  })
};

const showStep = (data) => {
  const pElement = document.createElement('p');
  pElement.className='card-text';
  pElement.textContent=JSON.stringify(data);
  stepsElement.appendChild(pElement);
}

const clearSteps = () => {
  stepsElement.innerHTML = '';
}

const applyOperator = async (x, y, operator) => {
  let res = 0;
  switch (operator) {
    case '+':
      res = await plus(x, y);
      break;
    case '-':
      res = await minus(x, y);
      break;
    case '*':
      res = await multiply(x, y);
      break;
    case '/':
      res = await devide(x, y);
      break;
    default:
      break;
  }
  return res;
}

const isOperator = (element) => {
  if ((element === '+') || (element === '*') || (element === '/') || (element === '-')) {
    return true;
  }
  return false;
} 

const calculate = async (arr) => {
  showStep(arr);
  if (arr.length === 1) {
    return arr[0];
  }

  const pos = arr.findIndex(isOperator);
  if (pos === -1) {
    return arr[0];
  }

  const res = await applyOperator(arr[pos - 2], arr[pos - 1], arr[pos]);

  if (pos === (arr.length - 1)) {
    return res;
  } else {
    const leftArr = arr.slice(0, pos - 2);
    leftArr.push(res);
    const rightArr = arr.slice(pos + 1);
    const newArr = leftArr.concat(rightArr);
    return calculate(newArr);
  }
}

const showResult = (data) => {
  resultElement.textContent = data;
}

const stringToArray = (str) => {
  return str.trim().split(' ').map((element) => {
    if (Number.isNaN(Number.parseFloat(element))) {
      return element;
    } else {
      return Number.parseFloat(element);
    }
  });
}

const btnCalcClick = (event) => {
  event.preventDefault();
  clearSteps();
  const expression = stringToArray(inputElement.value);
  calculate(expression).then((res) => showResult(res));
}

formElement.addEventListener('submit', btnCalcClick);
