import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {useCallback} from 'react';
import {useStore, useSelector} from 'react-redux';
import {logoutUser} from '../../redux/actions/user.js';

function Header() {
  const store = useStore();
  const user = useSelector((state) => state.user);

  const linkLogoutClick = useCallback(() => store.dispatch(logoutUser()),
    [store]);

  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__user, styles.user)}>
        <img className={styles.user__image} src={user.image} alt={user.alt} />
        <p className={styles.user__name}>{`${user.firstName}`}</p>
      </div>
      {user.lastName && (
        <ul className={classNames(styles.header__nav, styles.nav)}>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/cards">
              Cards
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/profile">
              Profile
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/loginForm" onClick={linkLogoutClick}>
              Log out
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
