import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

const store = {
  user: {
    firstName: 'Fedor',
    lastName: 'Matroskin'
  },
  avatar: {
    image: 'https://download-cs.net/steam/avatars/3149.jpg',
    alt: 'Captain Cat'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
