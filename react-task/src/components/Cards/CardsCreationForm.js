import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import styles from './CardsCreationForm.module.scss';

function CardsCreationForm({ cardAdd }) {
  const [inputs, setInputs] = useState({
    title: '',
    price: 1,
    description: '',
    imageUrl: ''
  });

  const btnAddClick = useCallback((event) => {
    event.preventDefault();
    if (inputs.title && inputs.price && inputs.description && inputs.imageUrl) {
      const card = {
        title: inputs.title,
        description: inputs.description,
        price: Number.parseFloat(inputs.price),
        imageUrl: inputs.imageUrl
      }
      cardAdd(card);
    }
  }, [inputs, cardAdd]);

  const inputChange = (event) => {
    const {name, value} = event.currentTarget;
    setInputs({...inputs, [name]: value});
  }

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>
        <div className={styles.form__input}>
          <label htmlFor="title" className={styles.form__label}>Title</label>
          <input type="text" placeholder="Title" name="title" id="title" maxLength="32" value={inputs.title} onChange={inputChange} className={styles.form__title}/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="price" className={styles.form__label}>Price</label>
          <input type="number" placeholder="price" name="price" id="price" value={inputs.price} onChange={inputChange} className={styles.form__price}/>
        </div>
        <div className={styles.form__input}>
        <label htmlFor="imageUrl" className={styles.form__label}>Link to image</label>
          <input type="text" placeholder="link to image" name="imageUrl" id="imageUrl" value={inputs.imageUrl} onChange={inputChange} className={styles.form__link}/>
        </div>
      </div>
      <div className={styles.form__right}>
        <textarea name="description" cols="40" rows="3" placeholder="Description" value={inputs.description} onChange={inputChange} className={styles.form__description}></textarea>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

CardsCreationForm.propTypes = {
  cardAdd: PropTypes.func.isRequired
}

export default CardsCreationForm;
