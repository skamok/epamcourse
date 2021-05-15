const fetchRate = (baseURL, base, symbol) => {
  return fetch(`${baseURL}latest?base=${base}&symbols=${symbol}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

export default fetchRate;