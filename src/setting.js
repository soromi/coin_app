import axios from "axios";

export const envSetting = axios.create({
  baseURL: process.env.REACT_APP_COIN_API,
  timeout: 500000,
});

export const apiRequest = options => {
  return new Promise((resolve, reject) => {
    envSetting(options)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};
