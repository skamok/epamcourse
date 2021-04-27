import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App({store}) {
  return (
    <div className={styles.app}>
      <Header user={store.user} />
      <Main avatar={store.avatar} />
      <Footer />
    </div>
  );
}

export default App;
