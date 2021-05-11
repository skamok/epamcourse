import React, { useEffect, useState, useCallback } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card.js';
import CardsCreationForm from './CardsCreationForm.js';
import { apiCall } from '../../api/mockedApi';
import mockedGenerateID from '../../api/mockedGenerateId.js';

function CardsContainer() {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');

  const fetchCards = async () => {
    setMessage('Loading...');
    apiCall()
      .then(data => setCards(data));
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const cardDelete = useCallback(
    (id) => {
      const newCards = cards.filter((card) => card.id !== id);
      setCards(newCards);
      if (!newCards.length) setMessage('No cards.');
    },
    [cards]
  );

  const cardAdd = useCallback(
    (card) => {
      setCards(prev => [{...card, id: mockedGenerateID()}, ...prev]);
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
