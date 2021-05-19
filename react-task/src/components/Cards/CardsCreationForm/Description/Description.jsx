import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.scss';

function Description({field, inputChange}) {
  const ref = useRef(null);
  return (
    <div className={styles.description}>
    <textarea ref={ref} name={field.id} cols="40" rows="3" placeholder={field.placeholder} value={field.value} onChange={inputChange}></textarea>
    <span className={`${styles.description__warning} ${field.error ? styles.description__warning_show : ''}`}>Required</span>
    </div>
  )
}

Description.propTypes = {
  field: PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    imageUrl: PropTypes.string,
    error: PropTypes.bool.isRequired
  }).isRequired,
  inputChange: PropTypes.func.isRequired
}

export default Description;
