const numbers = document.getElementById('rnd');
const table = document.getElementById('table');

const n = 10; // count of random numbers
const arr = Array.from({length: n}, () => randn_bm()); // Generate random numbers

const gaussObj = arr.reduce((acc, curr) => { // result object
  curr in acc ? acc[curr] +=1 : acc[curr] = 1; 
  return acc;
}, {});

for (let prop in gaussObj) {
  console.log(`|${prop}\t| ${gaussObj[prop]}\t|`);
  const row = document.createElement('tr');
  const num = document.createElement('td');
  const count = document.createElement('td');
  num.innerHTML = prop;
  count.innerHTML = gaussObj[prop];
  row.appendChild(num);
  row.appendChild(count);
  table.appendChild(row);
}

numbers.innerHTML = `[${arr}]`

function randn_bm() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}