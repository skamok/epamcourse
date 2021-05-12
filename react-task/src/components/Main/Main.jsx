import styles from './Main.module.scss';
import CardsContainer from '../Cards';
import LoginForm from '../LoginForm';
import {Switch, Route, Redirect} from "react-router-dom";

function Main({updateUserInfo, user}) {
  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path='/loginForm'>
          <LoginForm updateUserInfo={updateUserInfo}/>
        </Route>
        {
          user.logged &&
          <Route exact path='/cards'>
            <CardsContainer />
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
