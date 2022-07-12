import { put, takeLatest, call } from 'redux-saga/effects';
import { logoutSuccess, logoutFailed } from '../actions/logoutAction';
import { LOGOUT_ACTION } from '../constants/logoutConstant';
import request from '../../utils/request';
import { LOGOUT_URL } from '../../urlConfig';

export function* logoutAction() {
  try {
    yield call(request, LOGOUT_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        token: `${localStorage.getItem('token')}`,
        client_id: 'KDt0Y6mdo9azs5PPyRMxBGBLFkTUzhAIJiYipjmG',
        client_secret: '1111122222aaaaAAAA'
      }
    });
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
    // localStorage.removeItem('userData');
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export default function* LogoutSaga() {
  yield takeLatest(LOGOUT_ACTION, logoutAction);
}
