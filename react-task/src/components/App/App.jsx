import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState(() => {
    const initialState = {
      firstName: 'Guest',
      image: 'https://secure.gravatar.com/avatar/50c30aae0f1878a17788458f7fefbcfe?s=252&d=mm&r=g',
      alt: 'Guest'
    }
    return initialState;
  });

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
        <Header user={user} />
        <Main updateUserInfo={updateUserInfo} user={user}/>
        <Footer />
      </div>
  );
}

export default App;
