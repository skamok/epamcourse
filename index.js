const rnd = () => Math.floor(Math.random() * 5000 + 1);

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

const operation = async (x, y, operator) => {
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

const polish = [1, 2, '+', 3, '*', 4, '+'];

const isOperation = (element) => {
  if ((element === '+') || (element === '*') || (element === '/') || (element === '-')) {
    return true;
  }
  return false;
} 

const calculate = async (arr) => {
  console.log(arr);
  if (arr.length === 1) {
    return arr[0];
  }

  const pos = arr.findIndex(isOperation);
  if (pos === -1) {
    return arr[0]
  }

  const res = await operation(arr[pos - 2], arr[pos - 1], arr[pos]);

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

calculate(polish).then((res) => console.log('res=', res));


/*
const foo = async (x, y, operator) => {
  let res = 0;
  switch (operator) {
    case '+':
      res = await plus(x, y);
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
  console.log('foo', res);
  return res; 
}

 console.log(foo(2, 7, '+'));
 */
