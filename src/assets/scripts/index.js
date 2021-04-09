import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/iconsfont.css';
import '../styles/style.scss';

import App from './App.js';

const importImages = {};

function importContext(data, distObj) {
  data.keys().forEach((key) => {
    distObj[key] = data(key);
  });
}

importContext(require.context('../images', true, /.(png|svg|jpg|jpeg|gif)$/), importImages);

const bodyElement = document.getElementById('body');

const app = new App(bodyElement);
app.init();
