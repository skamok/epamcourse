import React from "react";
import styles from "./LoginForm.module.scss";
import { useState, useCallback, useEffect } from "react";
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import { loadUser } from '../../redux/actions/user.js';

function LoginForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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

  const btnLoginClick = useCallback((event) => {
    event.preventDefault();
    if (inputs.login && inputs.password) {
      dispatch(loadUser(inputs.login, inputs.password));
    } else {
      setErrors({
        login: inputs.login ? false : true,
        password: inputs.password ? false : true
      })
    }
  }, [inputs, dispatch]);

  useEffect(() => {
    if (user.error) {
      setErrors((prev) => ({...prev, message: true}))
    }
  }, [user.error]);

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

export default LoginForm;
