import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import {useCallback} from 'react';
import {defaultUser} from '../../constants.js';

function Header({ user, updateUserInfo }) {
  const linkLogoutClick = useCallback(() => updateUserInfo(defaultUser),
    [updateUserInfo]);

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

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default Header;
