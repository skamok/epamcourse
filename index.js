const symb = Symbol('MySymbol');
const obj = {age: 5};

const concat = (a, b, elemResult, elemType = null, operation = 'plus') => {
  let res = '';
  switch (operation) {
    case 'minus': res = a - b;
      break;
    default: res = a + b;
      break;
  }
  if (elemResult) {elemResult.innerHTML = res}
  if (elemType) {elemType.innerHTML = typeof res}
};

concat(5, '_str', document.getElementById('111res'), document.getElementById('11'));
concat(Infinity, '_str', document.getElementById('112res'));
concat(NaN, '_str', document.getElementById('113res'));
concat(true, '_str', document.getElementById('12res'), document.getElementById('12'));
concat(null, '_str', document.getElementById('13res'), document.getElementById('13'));
concat(undefined, '_str', document.getElementById('14res'), document.getElementById('14'));
document.getElementById('15res').innerHTML = String(symb);
concat(obj, '_str', document.getElementById('16res'), document.getElementById('16'));

concat('25', 5, document.getElementById('21res'), document.getElementById('21'), 'minus');
concat(Number('5'), Number('3'), document.getElementById('211res'), document.getElementById('211'));
document.getElementById('212res').innerHTML = Number('5z');
concat(true, 2, document.getElementById('22res'), document.getElementById('22'));
document.getElementById('221res').innerHTML = Number(false);
document.getElementById('23res').innerHTML = Number(undefined);
document.getElementById('24res').innerHTML = Number(null);
try {
  Number(symb);
} catch (error) {
  document.getElementById('25res').innerHTML = error.name + ' ' +error.message; 
}

document.getElementById('31').innerHTML = Boolean('');
document.getElementById('311').innerHTML = Boolean('asdf');
document.getElementById('321').innerHTML = Boolean(0);
document.getElementById('322').innerHTML = Boolean(10);
document.getElementById('323').innerHTML = Boolean(NaN);
document.getElementById('324').innerHTML = Boolean(NaN == NaN);
document.getElementById('33').innerHTML = Boolean({});
document.getElementById('34').innerHTML = Boolean(null);
document.getElementById('35').innerHTML = Boolean(undefined);
