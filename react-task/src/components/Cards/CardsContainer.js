import React, { useEffect, useState } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card.js';
import CardsCreationForm from './CardsCreationForm.js';
import { apiCall } from '../../api/mockedApi';

function CardsContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await apiCall();
      setCards(data);
    }
    fetchCards();
  }, []);

  const cardDelete = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  }

  return (
    <section className={styles.cardsCntr}>
      <CardsCreationForm />
      <div className={styles.cardsCntr__cards}>
        {
          cards.length
          ? cards.map((card) => <Card key={card.id} card={card} cardDelete={cardDelete}/>)
          : <p className={styles.cardsCntr__message}>Loading...</p>
        }
      </div>      
    </section>
  )
}

export default CardsContainer

