import React, { useEffect, useState } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './card/Card.jsx';
import CardsCreationForm from './CardsCreationForm/CardsCreationForm.jsx';
import { useSelector, useDispatch} from 'react-redux';
import {loadCards} from '../../redux/actions/cards.js';

function CardsContainer() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!cards.length) {
      setMessage('Loading...');
      dispatch(loadCards());
    }
  }, [dispatch, cards]);
  
  return (
    <section className={styles.cardsCntr}>
      <CardsCreationForm />
      <div className={styles.cardsCntr__cards}>
        {
          cards.length
          ? cards.map((card) => <Card key={card.id} card={card}/>)
          : <p className={styles.cardsCntr__message}>{message}</p>
        }
      </div>      
    </section>
  )
}

export default CardsContainer;
