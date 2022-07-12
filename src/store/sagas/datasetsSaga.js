import { put, takeLatest, call } from 'redux-saga/effects';
import { getDatasetsSuccess, getDatasetsFailed } from '../actions/datasetsAction';
import { GET_DATASETS_ACTION } from '../constants/datasetsConstant';
import request from '../../utils/request';
import { DATASETS_URL } from '../../urlConfig';

export function* datasetsDataAction() {
  try {
    const data = yield call(request, `${DATASETS_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    // console.log(data);
    if (data) {
      localStorage.setItem('datasets', JSON.stringify(data));
      yield put(getDatasetsSuccess(data));
    }
  } catch (error) {
    yield put(getDatasetsFailed(error));
  }
}

export default function* DatasetsSaga() {
  yield takeLatest(GET_DATASETS_ACTION, datasetsDataAction);
}
