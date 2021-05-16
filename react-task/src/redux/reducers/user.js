import { LOAD_USER, LOGOUT_USER } from '../actions/types.js';

const initialState = {
  firstName: 'Guest',
  image: 'https://secure.gravatar.com/avatar/50c30aae0f1878a17788458f7fefbcfe?s=252&d=mm&r=g',
  alt: 'Guest'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return {...action.payload};
    }
    case LOGOUT_USER: {
      return {...initialState};
    }
    default:
      return {...state}
  }
}

export default user;
