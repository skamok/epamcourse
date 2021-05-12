import { mockedResponse, mockedAccount } from './mockedResponse.js';

export const apiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockedResponse), 500);
  })
}

export const apiLogin = (login, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const account = mockedAccount.find((acc) => acc.login === login.toLowerCase() && acc.psw === password.toLowerCase());
      if (account) {
        resolve(account.info);  
      } else {
        resolve(false)
      }
    }, 500, mockedAccount, login, password);
  })
}
