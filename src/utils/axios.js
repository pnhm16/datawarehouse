/* eslint-disable func-names */
import axios from 'axios';
import { REFRESH_TOKEN_URL } from '../urlConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({});

instance.interceptors.request.use(
  async (config) => {
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = `Bearer ${AsyncStorage.getItem('token')}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorResponse = error.response;
    if (errorResponse.status === 401) {
      try {
        // eslint-disable-next-line no-use-before-define
        await getToken();
        return Promise.resolve(instance(errorResponse.config));
      } catch (e) {
        // nếu refresh hết hạn thì đẩy vể login
        AsyncStorage.clear();
        sessionStorage.clear();
        window.location.href = '/auth/login';
        return Promise.reject(e);
      }
    }
    return Promise.reject(error.response);
  }
);

const getToken = async () => {
  // AsyncStorage.setItem('refreshTokenWait', 'wait');
  await axios({
    url: REFRESH_TOKEN_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { refreshToken: AsyncStorage.getItem('refreshToken') }
  })
    .then((response) => {
      AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      AsyncStorage.setItem('token', response.data.token);
      // AsyncStorage.removeItem('refreshTokenWait');
    })
    .catch((error) => {
      // AsyncStorage.removeItem('refreshTokenWait');
      AsyncStorage.clear();
      sessionStorage.clear();
      window.location.href = '/auth/login';
      return Promise.reject(error);
    });
};

export default instance;
