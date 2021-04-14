import React, { Component } from 'react'
import styles from './CardsContainer.module.scss';
import Card from './Card.js';
import { apiCall } from '../../api/mockedApi';

export default class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {cards: []};
  }

  componentDidMount() {
    apiCall().then((result) => {
      this.setState({cards: result});
    });
  }

  render() {
    return (
      <section className={styles.cardsCntr}>
        {
          this.state.cards.length
          ? this.state.cards.map((card) => <Card key={card.id} card={card}/>)
          : <p className={styles.cardsCntr__message}>No cards yet</p>
        }
        
      </section>
    )
  }
}
