import { mockedResponse, mockedAccount } from './mockedResponse.js';

export const apiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockedResponse), 1000);
  })
}

export const apiLogin = (login, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const account = mockedAccount.find((acc) => acc.login === login && acc.psw === password);
      if (account) {
        resolve(account.info);  
      } else {
        resolve(false)
      }
    }, 1000, mockedAccount, login, password);
  })
}
