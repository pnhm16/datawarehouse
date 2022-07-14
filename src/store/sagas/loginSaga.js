import { put, takeLatest, call } from "redux-saga/effects";
import { loginSuccess, loginFailed } from "../actions/loginAction";
import {
  LOGIN_ACTION,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  TOKEN,
} from "../constants/loginConstant";
import API from "../../utils/axios";
import { LOGIN_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosSetAuthToken } from "../../utils/axios";
import { hanldeError } from "../../utils/handleError";

export function* loginAction(action) {
  // console.log(action.body);
  const newBody = {
    username: action.body.userName,
    password: action.body.password,
    client_id: "KDt0Y6mdo9azs5PPyRMxBGBLFkTUzhAIJiYipjmG",
    client_secret: "1111122222aaaaAAAA",
    grant_type: "password",
  };
  try {
    const data = yield API.post(LOGIN_URL, newBody);
    console.log({ alo: data });
    if (data && data.access_token && data.refresh_token) {
      AsyncStorage.setItem("token", data.access_token);
      AsyncStorage.setItem("refreshToken", data.refresh_token);

      axiosSetAuthToken(data.access_token);
      yield put({ type: TOKEN, token: data?.access_token });
      yield put(loginSuccess(data));
    }
  } catch (error) {
    console.log("error", error);
    hanldeError(error);

    yield put(loginFailed(error));
  }
}

export function* logoutAction() {
  console.log("logout ok");
  yield put(loginFailed);
}

export default function* LoginSaga() {
  yield takeLatest(LOGIN_ACTION, loginAction);
  yield takeLatest(LOGIN_SUCCESS, loginSuccess);
  yield takeLatest(LOGIN_FAILED, loginFailed);

  // yield takeLatest(LOGIN_ACTION, loginAction);
}
