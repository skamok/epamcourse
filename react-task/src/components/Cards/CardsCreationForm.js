import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './CardsCreationForm.module.scss';

function CardsCreationForm({ cardAdd }) {
  const [inputs, setInputs] = useState({
    title: '',
    price: 1,
    description: '',
    imageUrl: ''
  });
  console.log('form render');
  const btnAddClick = (event) => {
    event.preventDefault();

    if (inputs.title.length && inputs.price.length && inputs.description.length && inputs.imageUrl.length) {
      const card = {
        title: inputs.title,
        description: inputs.description,
        price: Number.parseFloat(inputs.price),
        imageUrl: inputs.imageUrl
      }
      cardAdd(card);
    }
  }

  const inputChange = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    setInputs({...inputs, [field]: value});
  }

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>
        <div className={styles.form__input}>
          <label htmlFor="title" className={styles.form__label}>Title</label>
          <input type="text" placeholder="Title" id="title" maxLength="32" value={inputs.title} onChange={inputChange} className={styles.form__title}/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="price" className={styles.form__label}>Price</label>
          <input type="number" placeholder="price" id="price" value={inputs.price} onChange={inputChange} className={styles.form__price}/>
        </div>
        <div className={styles.form__input}>
        <label htmlFor="imageUrl" className={styles.form__label}>Link to image</label>
          <input type="text" placeholder="link to image" id="imageUrl" value={inputs.imageUrl} onChange={inputChange} className={styles.form__link}/>
        </div>
      </div>
      <div className={styles.form__right}>
        <textarea name="description" id="description" cols="40" rows="3" placeholder="Description" value={inputs.description} onChange={inputChange} className={styles.form__description}></textarea>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

CardsCreationForm.propTypes = {
  cardAdd: PropTypes.func.isRequired
}

export default CardsCreationForm;
