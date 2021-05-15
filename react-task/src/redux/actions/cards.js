import {ADD_CARD, DELETE_CARD, LOAD_CARDS} from './types.js';
import {apiCards} from '../../api/mockedApi.js';

export const createCard = (data) => {
  return {
    type: ADD_CARD,
    payload: data
  }
}

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id
  }
}

export function loadCards() {
  return function(dispatch) {
    apiCards()
      .then(data => dispatch({type: LOAD_CARDS, payload: data}));
  }
}
