import { combineReducers } from 'redux';
import cards from './cards.js';
import user from './user.js';

const reducer = combineReducers({
  cards,
  user
});

export default reducer;
