const fetchSymbols = (baseURL, summaryURL) => {
  return fetch(baseURL + summaryURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
}

export default fetchSymbols;