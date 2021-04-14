import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card({card}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__imgCntr}>
        <img className={styles.card__img} src={card.imageUrl} alt="lot"/>
      </div>
      <div className={styles.card__info}>
        <p className={styles.card__title}>{card.title}</p>
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
  })
};

export default Card;
