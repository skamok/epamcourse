import React, { useEffect, useState } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card.js';
import CardsCreationForm from './CardsCreationForm.js';
import { apiCall } from '../../api/mockedApi';

function CardsContainer() {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchCards = async () => {
      const data = await apiCall();
      setCards(data);
      if (data.length) setMessage('No cards.');
    }
    fetchCards();
  }, []);

  const cardDelete = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  }

  const cardAdd = (card) => {
    setCards(prev => [{...card, id: prev.length}, ...prev]);
  }

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

export default CardsContainer

