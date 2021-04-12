import { mockedResponse } from './mockedResponse.js';

export const apiCall = () => {
  return new Promise((resolve) => {
    setTimeout(resolve(mockedResponse), 500);
  })
}