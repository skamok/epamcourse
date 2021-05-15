import { createStore } from 'redux';
import cards from '../reducers/cards.js';

const store = createStore(cards);

export default store;
