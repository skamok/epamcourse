import styles from './Main.module.scss';
import CardsContainer from '../Cards';
import LoginForm from '../LoginForm';
import Profile from '../Profile';
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux';

function Main() {
  const user = useSelector((state) => state.user);
  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path='/loginForm'>
          <LoginForm />
        </Route>
        {
          user.logged &&
          <Route exact path='/cards'>
            <CardsContainer />
          </Route>
        }
        {
          user.logged &&
          <Route exact path='/profile'>
            <Profile />
          </Route>
        }
        <Route path="/">
          <Redirect to="/loginForm" />
        </Route>
      </Switch>
    </main>
  )
}

export default Main;
