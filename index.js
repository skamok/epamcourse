const plus = (x, y) => x + y;
const minus = (x, y) => x - y;
const multiply = (x, y) => x * y;
const devide = (x, y) => x / y;

const operation = (x, y, operator) => {
  let res = 0;
  switch (operator) {
    case '+':
      res = plus(x, y);
      break;
    case '-':
      res = minus(x, y);
      break;
    case '*':
      res = multiply(x, y);
      break;
    case '/':
      res = devide(x, y);
      break;
    default:
      break;
  }
  return res;
}

const polish = [1, 2, '+', 3, '*', 4, '+'];

const isOperation = (element) => {
  if ((element === '+') || (element === '*') || (element === '/') || (element === '-')) {
    return true;
  }
  return false;
} 

const calculate = (arr) => {
  console.log(arr);
  if (arr.length === 1) {
    return arr[0];
  }

  const pos = arr.findIndex(isOperation);
  if (pos === -1) {
    return arr[0]
  }

  const res = operation(arr[pos - 2], arr[pos - 1], arr[pos]);

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

console.log(calculate(polish));
