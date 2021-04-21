import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './CardsCreationForm.module.scss';

function CardsCreationForm({ cardAdd }) {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('1');
  const [description, setDescription] = useState('');
  const [imageUrl, setimageUrl] = useState('');

  const btnAddClick = (event) => {
    event.preventDefault();
    if (title.length && price.length && description.length && imageUrl.length) {
      const card = {
        title,
        description,
        price: Number.parseInt(price, 10),
        imageUrl
      }
      cardAdd(card);
    }
  }

  const inputChange = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    }
    if (event.target.id === 'description') {
      setDescription(event.target.value);
    }
    if (event.target.id === 'imageUrl') {
      setimageUrl(event.target.value);
    }
    if (event.target.id === 'price') {
      const number = Number.parseInt(event.target.value, 10);
      setPrice(number.toString());
    }
  }

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>
        <div className={styles.form__input}>
          <label htmlFor="title" className={styles.form__label}>Title</label>
          <input type="text" placeholder="Title" id="title" maxLength="32" value={title} onChange={inputChange} className={styles.form__title}/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="price" className={styles.form__label}>Price</label>
          <input type="text" placeholder="price" id="price" value={price} onChange={inputChange} className={styles.form__price}/>
        </div>
        <div className={styles.form__input}>
        <label htmlFor="imageUrl" className={styles.form__label}>Link to image</label>
          <input type="text" placeholder="link to image" id="imageUrl" value={imageUrl} onChange={inputChange} className={styles.form__link}/>
        </div>
      </div>
      <div className={styles.form__right}>
        <textarea name="description" id="description" cols="40" rows="3" placeholder="Description" value={description} onChange={inputChange} className={styles.form__description}></textarea>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

CardsCreationForm.propTypes = {
  cardAdd: PropTypes.func.isRequired
}

export default CardsCreationForm;
