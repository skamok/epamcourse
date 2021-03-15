const numbers = document.getElementById("rnd");
const table = document.getElementById("table");
const n = 10; // count of random numbers

const arr = generateArray(n); // Generate random numbers

const gaussObj = createGaussObject(); // result object;

showNumbers(arr, numbers); // show numbers in html
fillTable(gaussObj, table); // show numbers distribution in html

function randn_bm() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

function generateArray(n) {
  return Array.from({ length: n }, () => randn_bm());
}

function createGaussObject() {
  return arr.reduce((acc, curr) => {
    curr in acc ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});
}

function fillTable(data, parentElement) {
  for (let prop in data) {
    console.log(`|${prop}\t| ${data[prop]}\t|`);
    const row = document.createElement("tr");
    const num = document.createElement("td");
    const count = document.createElement("td");
    num.innerHTML = prop;
    count.innerHTML = data[prop];
    row.appendChild(num);
    row.appendChild(count);
    parentElement.appendChild(row);
  }
}

function showNumbers(data, parentElement) {
  parentElement.innerHTML = `[${data}]`;
}
