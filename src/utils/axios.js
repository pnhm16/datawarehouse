/* eslint-disable func-names */
import axios from "axios";
import { REFRESH_TOKEN_URL, AUTH_URL } from "../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../store/index";

export const axiosSetAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const errorResponse = error.response;
//     if (errorResponse.status === 401) {
//       try {
//         // eslint-disable-next-line no-use-before-define
//         await getToken();
//         return Promise.resolve(instance(errorResponse.config));
//       } catch (e) {
//         // nếu refresh hết hạn thì đẩy vể login
//         AsyncStorage.clear();
//         sessionStorage.clear();
//         window.location.href = "/auth/login";
//         return Promise.reject(e);
//       }
//     }
//     return Promise.reject(error.response);
//   }
// );

export const getToken = async () => {
  // AsyncStorage.setItem('refreshTokenWait', 'wait');
  await axios({
    url: REFRESH_TOKEN_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { refreshToken: AsyncStorage.getItem("refreshToken") },
  })
    .then((response) => {
      AsyncStorage.setItem("refreshToken", response.data.refreshToken);
      AsyncStorage.setItem("token", response.data.token);
      // AsyncStorage.removeItem('refreshTokenWait');
      axiosSetAuthToken(response.data.token);
    })
    .catch((error) => {
      // AsyncStorage.removeItem('refreshTokenWait');
      AsyncStorage.clear();
      sessionStorage.clear();
      window.location.href = "/auth/login";
      return Promise.reject(error);
    });
};

const getDataBody = (config) => {
  let data = "";
  if (
    config.data &&
    config.headers["Content-Type"] === "application/x-www-form-urlencoded"
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

//TODO: REQUEST
axios.interceptors.request.use(
  (config) => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(
        "%c [HTTP Interceptor Request]",
        "color: blue; font-weight: bold",
        config
      );
    }

    return { ...config, data };
  },
  (error) => {
    return Promise.reject(error);
  }
);

//TODO: RESPONSE
axios.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log(
        "%c [HTTP Interceptor Response]",
        "color: green; font-weight: bold",
        response
      );
    }

    return response;
  },
  (error) => {
    if (__DEV__) {
      console.log(
        "%c [HTTP Interceptor Response Error]",
        "color: red; font-weight: bold",
        error?.response
      );
    }

    return Promise.reject(error);
  }
);

export default class HttpService {
  static generateHeader(headers) {
    const token = store.getState().token.token;
    let options = {
      "Content-Type": headers || "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
    if (token !== null) {
      options = {
        ...options,
        Authorization: `Bearer ${token}`,
      };
    }

    return options;
  }

  //TODO: GET
  static async get(url, params) {
    try {
      return await axios
        .get(url, {
          headers: {
            get: this.generateHeader(),
          },
          params: params,
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: POST
  static async post(url, body, params) {
    try {
      return await axios
        .post(url, body, {
          headers: {
            post: this.generateHeader(),
          },
          params: params,
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: FORM_DATA
  static async postFormData(url, formData) {
    try {
      return await axios
        .post(url, formData, {
          headers: {
            post: this.generateHeader("form-data"),
          },
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PUT
  static async put(url, data) {
    try {
      return await axios
        .put(url, data, {
          headers: this.generateHeader(),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PATCH
  static async patch(url, data) {
    try {
      return await axios
        .patch(url, data, {
          headers: this.generateHeader(),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: DELETE
  static async delete(url) {
    try {
      return await axios
        .delete(url, {
          headers: this.generateHeader(),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
