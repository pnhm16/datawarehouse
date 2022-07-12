import axios from "axios";
import { ACCESS_TOKEN } from "../constant/envVar";
import AsyncStorage from "@react-native-async-storage/async-storage";

let CancelSource = axios.CancelToken.source();

export const cancelRequest = () => {
  CancelSource.cancel("cancel");
};

export const axiosDefault = axios.create({
  baseURL: "https://kcdichdangu.ddns.net:8000/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosDefault.interceptors.request.use(
  async (config) => {
    try {
      const accToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (accToken) {
        config.headers.Authorization = `${accToken}`;
      }
      config.cancelToken = CancelSource.token;
      return config;
    } catch (e) {
      Promise.reject(e);
    }
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosDefault.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (axios.isCancel(error)) {
      CancelSource = axios.CancelToken.source();
    }
    return Promise.reject(error);
  }
);