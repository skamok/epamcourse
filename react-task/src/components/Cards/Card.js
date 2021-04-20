import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Card({card, cardDelete}) {
  const btnClose = <FontAwesomeIcon icon={faTimes} className={styles.card__btnDelete} onClick={btnDelClick}/>;

  function btnDelClick() {
    cardDelete(card.id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__imgCntr}>
        <img className={styles.card__img} src={card.imageUrl} alt="lot"/>
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__header}>
        <p className={styles.card__title}>{card.title}</p>
        {/* <button className={styles.card__btnDelete}>{btnClose}</button> */}
        {btnClose}
        </div>
        <p className={styles.card__description}>{card.description}</p>
        <p className={styles.card__price}>{`${card.price} $`}</p>
      </div>
    </div>
  )
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired,

  cardDelete: PropTypes.func.isRequired
};

export default Card;
