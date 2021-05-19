import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';

function InputField({fieldName, fieldValue, inputChange}) {
  return (
    <div className={styles.field}>
      <label htmlFor={fieldName} className={styles.field__label}>{fieldName}</label>
      <input type="text" placeholder={fieldName} name={fieldName} id={fieldName} maxLength="32" value={fieldValue} onChange={inputChange} className={styles.field__title}/>
    </div>
  )
}

InputField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputChange: PropTypes.func.isRequired
}

export default InputField;
