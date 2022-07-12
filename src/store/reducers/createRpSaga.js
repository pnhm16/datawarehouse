import { put, takeLatest, call } from 'redux-saga/effects';
import { createReportsSuccess, createReportsFailed } from '../actions/reportsAction';
import { CREATE_REPORTS } from '../constants/reportsConstant';
import request from '../../utils/request';
import { DATASETS_URL } from '../../urlConfig';

export function* createReportAction(action) {
  try {
    const data = yield call(request, `${DATASETS_URL}${action.body.id}/create_report/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: {
        name_report: action.body.name_report
      }
    });
    // console.log(data);
    if (data) {
      yield put(createReportsSuccess());
    }
  } catch (error) {
    // console.log(error);
    yield put(createReportsFailed(error));
  }
}

export default function* CreateRpSaga() {
  yield takeLatest(CREATE_REPORTS, createReportAction);
}
