import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { getWorkspacesSuccess, getWorkspacesFailed } from '../actions/workspacesAction';
import { GET_WORKSPACES_ACTION } from '../constants/workspacesConstant';
import request from '../../utils/request';
import { USERLIST_URL } from '../../urlConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* workspacesDataAction() {
  const token = yield AsyncStorage.getItem("token");
  console.log('aaaaalo', token);
  try {
    const data = yield call(request, `${USERLIST_URL}workspaces/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    // console.log('data', data);
    if (data) {
      AsyncStorage.setItem('workspaces', JSON.stringify(data));
      yield put(getWorkspacesSuccess(data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getWorkspacesFailed(error));
  }
}

export default function* WorkspacesSaga() {
  yield takeLatest(GET_WORKSPACES_ACTION, workspacesDataAction);
}
