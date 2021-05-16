import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {useHistory } from "react-router-dom";
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);

  const history = useHistory();

  useEffect(() => {
    if (user.logged) {
      history.push('/cards');
    } else {

    }
  }, [user, history]); 

  return (
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
