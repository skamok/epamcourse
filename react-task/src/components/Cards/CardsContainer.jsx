import React, { useEffect, useState, useCallback } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card.jsx';
import CardsCreationForm from './CardsCreationForm.jsx';
import { apiCall } from '../../api/mockedApi';
import { v1 as uuidv1 } from 'uuid';
import { useSelector, useStore} from 'react-redux';
import {loadCards} from '../../redux/actions/cards.js';

function CardsContainer() {
  const store = useStore();
  console.log('state=', store.getState());
  const cards = useSelector((state) => state.cards);
  console.log('cards=', cards);
  
  const [cardsq, setCards] = useState([]);
  const [message, setMessage] = useState('');

  const fetchCards = async () => {
    setMessage('Loading...');
    apiCall()
      .then(data => setCards(data));
  }

  useEffect(() => {
    store.dispatch(loadCards());
  }, []);

  const cardDelete = useCallback(
    (id) => {
      const newCards = cardsq.filter((card) => card.id !== id);
      setCards(newCards);
      if (!newCards.length) setMessage('No cards.');
    },
    [cardsq]
  );

  const cardAdd = useCallback(
    (card) => {
      setCards(prev => [{...card, id: uuidv1()}, ...prev]);
    },
    []
  )
  
  return (
    <section className={styles.cardsCntr}>
      <CardsCreationForm cardAdd={cardAdd}/>
      <div className={styles.cardsCntr__cards}>
        {
          cards.length
          ? cards.map((card) => <Card key={card.id} card={card} cardDelete={cardDelete}/>)
          : <p className={styles.cardsCntr__message}>{message}</p>
        }
      </div>      
    </section>
  )
}

export default CardsContainer;
