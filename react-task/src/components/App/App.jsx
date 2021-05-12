import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import {defaultUser} from '../../constants.js';

function App() {
  const [user, setUser] = useState(() => defaultUser);

  let history = useHistory();

  useEffect(() => {
    if (user.logged) {
      history.push('/cards');
    } else {
    }
  }, [user, history]);

  const updateUserInfo = (userInfo) => setUser(userInfo); 

  return (
      <div className={styles.app}>
        <Header user={user} updateUserInfo={updateUserInfo}/>
        <Main updateUserInfo={updateUserInfo} user={user}/>
        <Footer />
      </div>
  );
}

export default App;
