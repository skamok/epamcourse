import {ADD_CARD, DELETE_CARD} from '../actions/types.js';

const initialState = [
    {
      id: '12544ddf44',
      title: 'Apple MacBook Pro',
      description: '13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors',
      price: 2000,
      imageUrl: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/AppleMacBookPro15-2018__1_.jpg'
    }
]

const cards = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CARD: {
      return [action.payload, ...state];
    }
    case DELETE_CARD: {
      const newState = state.filter((card) => card.id !== action.payload);
      return newState;
    }
    default: {    
      return state;
    }
  }
}

export default cards;
