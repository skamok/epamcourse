import '../styles/reset.css';
import '../styles/style.css';

const importImages = {};

function importContext(data, distObj) {
  data.keys().forEach((key) => {
    distObj[key] = data(key);
  });
}

importContext(require.context('../images', true, /.(png|svg|jpg|jpeg|gif)$/), importImages);
