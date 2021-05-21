import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { deleteCard } from '../../../redux/actions/cards.js';
import { useDispatch } from 'react-redux';

function Card({ card }) {

  const dispatch = useDispatch();

  const btnDelClick = useCallback(() => {
    dispatch(deleteCard(card.id));
  }, [dispatch, card]);

  const btnDelete = <FontAwesomeIcon icon={faTimes} className={styles.card__btnDelete} onClick={btnDelClick}/>;

  return (
    <div className={styles.card}>
      <div className={styles.card__imgCntr}>
        <img className={styles.card__img} src={card.imageUrl} alt="lot"/>
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__header}>
        <p className={styles.card__title}>{card.title}</p>
        {btnDelete}
        </div>
        <p className={styles.card__description}>{card.description}</p>
        <p className={styles.card__price}>{`${card.price} $`}</p>
      </div>
    </div>
  )
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired
};

export default Card;
