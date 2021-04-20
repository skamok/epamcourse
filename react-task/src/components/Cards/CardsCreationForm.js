import PropTypes from 'prop-types';
import styles from './CardsCreationForm.module.scss';

function CardsCreationForm(props) {
  return (
    <form className={styles.form}>
      <div className={styles.form__left}>
        <div className={styles.form__input}>
          <label htmlFor="title" className={styles.form__label}>Title</label>
          <input type="text" placeholder="Title" id="title" maxLength="32" className={styles.form__title}/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="price" className={styles.form__label}>Price</label>
          <input type="text" placeholder="price" id="price" className={styles.form__price}/>
        </div>
        <div className={styles.form__input}>
        <label htmlFor="link" className={styles.form__label}>Link to image</label>
          <input type="text" placeholder="link" id="link" className={styles.form__link}/>
        </div>
      </div>
      <div className={styles.form__right}>
        <textarea name="description" id="description" cols="40" rows="3" placeholder="Description" className={styles.form__description}></textarea>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

CardsCreationForm.propTypes = {

}

export default CardsCreationForm

