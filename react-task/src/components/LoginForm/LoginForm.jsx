import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import classNames from 'classnames';

function LoginForm({loginUser}) {
  const [inputs, setInputs] = useState({
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    login: false,
    password: false
  });

  const inputChange = (event) => {
    const {name, value} = event.currentTarget;
    setInputs({...inputs, [name]: value});
    setErrors({...errors, [name]: false});
  }

  const btnLoginClick = (event) => {
    event.preventDefault();
    if (inputs.login && inputs.password) {
      loginUser(inputs.login, inputs.password);
    } else {
      setErrors({
        login: inputs.login ? false : true,
        password: inputs.password ? false : true
      })
    }
  }

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
      <button className={styles.form__button} type="submit">
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default LoginForm;
