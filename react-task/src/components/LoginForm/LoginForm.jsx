import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import { useState, useCallback } from "react";
import classNames from 'classnames';
import {apiLogin} from '../../api/mockedApi.js';

function LoginForm({updateUserInfo}) {
  const [inputs, setInputs] = useState({
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    login: false,
    password: false,
    message: false
  });

  const inputChange = (event) => {
    const {name, value} = event.currentTarget;
    setInputs({...inputs, [name]: value});
    setErrors({...errors, [name]: false, message: false});
  }

  const fetchUser = useCallback(async (user, password) => {
    apiLogin(user, password).then((result) => {
      if (result) {
        const userInfo = {...result, logged: true};
        updateUserInfo(userInfo);
      } else {
        setErrors({...errors, message: true})
      }
    });
  }, [updateUserInfo, errors]);

  const btnLoginClick = useCallback((event) => {
    event.preventDefault();
    if (inputs.login && inputs.password) {
      fetchUser(inputs.login, inputs.password);
    } else {
      setErrors({
        login: inputs.login ? false : true,
        password: inputs.password ? false : true
      })
    }
  }, [inputs, fetchUser]);

  return (
    <form className={styles.form} onSubmit={btnLoginClick}>
      <input
        className={classNames(styles.form__input, {[styles.form__input_error]: errors.login})}
        type="text"
        name="login"
        placeholder="input login"
        value={inputs.login}
        onChange={inputChange}
      />
      <input
        className={classNames(styles.form__input, {[styles.form__input_error]: errors.password})}
        type="password"
        name="password"
        placeholder="input password"
        value={inputs.password}
        onChange={inputChange}
      />
      <p className={classNames(styles.form__message, {[styles.form__message_visible]: errors.message})}>Wrong username or password!</p>
      <button className={styles.form__button} type="submit">
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  updateUserInfo: PropTypes.func.isRequired
};

export default LoginForm;
