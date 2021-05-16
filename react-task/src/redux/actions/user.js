import { apiLogin } from '../../api/mockedApi.js';
import { LOAD_USER, LOGOUT_USER } from './types.js';

export const loadUser = (login, password) => 
  (dispatch) => apiLogin(login, password)
    .then((result) => {
      if (result) {
        const userInfo = {...result, logged: true};
        dispatch({type: LOAD_USER, payload: userInfo})
      } else {
        const userInfo = {error: true};
        dispatch({type: LOAD_USER, payload: userInfo})
    }
});

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}
