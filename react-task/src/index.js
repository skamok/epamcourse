import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";

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
    <Router>
      <App store={store} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
