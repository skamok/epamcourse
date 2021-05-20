function fetchData(url) {
  return fetch(url)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(response.statusText);
  });  
}

export default fetchData;
