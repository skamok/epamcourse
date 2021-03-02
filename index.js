const request = require('request');
const cowsay = require('cowsay');

const quoteURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

function writeMessage(error, response, body) {
  if (!error) {
    if (response.statusCode === 200) {
      const { quoteText } = JSON.parse(body);
      console.log(cowsay.say({
        text : quoteText,
        e : 'oo',
        T : 'U '
      }));
    } else {
      console.log(cowsay.say({
        text : `Error ${response.statusCode} ${response.statusMessage}`,
        e : 'oO',
        T : '<>'
      }));
    }
  } else {
    console.log(cowsay.say({
      text : `${error.name} ${error.message}`,
      e : 'OO',
      T : '%'
    }));
  }
}

request(quoteURL, writeMessage);
