import { put, takeLatest, call } from 'redux-saga/effects';
import { loginSuccess, loginFailed } from '../actions/loginAction';
import { LOGIN_ACTION } from '../constants/loginConstant';
import request from '../../utils/request';
import { LOGIN_URL } from '../../urlConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* loginAction(action) {
  // console.log(action.body);
  const newBody = {
    username: action.body.userName,
    password: action.body.password,
    client_id:"KDt0Y6mdo9azs5PPyRMxBGBLFkTUzhAIJiYipjmG",
    client_secret:"1111122222aaaaAAAA",
    grant_type:"password"
  }
  try { 
    const data = yield call(request, LOGIN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBody)
    });
    console.log(data)
    if (data && data.access_token && data.refresh_token) {
      AsyncStorage.setItem('token', data.access_token);
      AsyncStorage.setItem('refreshToken', data.refresh_token);
      yield put(loginSuccess(data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(loginFailed(error));
  }
}

export function* logoutAction() {
  console.log('logout ok');
  yield put(loginFailed);
}

export default function* LoginSaga() {
  yield takeLatest(LOGIN_ACTION, loginAction);
  // yield takeLatest(LOGIN_ACTION, loginAction);
}
