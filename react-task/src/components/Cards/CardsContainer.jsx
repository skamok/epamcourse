import React, { useEffect, useState } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './card/Card.jsx';
import CardsCreationForm from './CardsCreationForm/CardsCreationForm.jsx';
import { useSelector, useStore} from 'react-redux';
import {loadCards} from '../../redux/actions/cards.js';

function CardsContainer() {
  const store = useStore();
  const cards = useSelector((state) => state.cards);
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Loading...');
    if (!cards.length) {
      store.dispatch(loadCards());
    }
  }, [store, cards]);
  
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
