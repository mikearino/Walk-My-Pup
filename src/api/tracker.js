import axios from 'axios';
import { AsyncStorage } from 'react-native';

//The reason to assign to variable is to say
// axios run this function before you ever make a request.
const instance = axios.create({
  baseURL: 'http://79ac9ab7.ngrok.io'
});

instance.interceptors.request.use(
  //First function called any time a request is made. Config
  //object has information about the request that is going to be
  //made.
  async config => {
    //Pulling token from async storage
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  //Second function is called any time that there is an error.
  errr => {
    return Promise.reject(err);
  }
);

export default instance;
