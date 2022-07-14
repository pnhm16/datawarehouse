import { put, takeLatest, call } from "redux-saga/effects";
import {
  getVsReportSuccess,
  getVsReportFailed,
} from "../actions/vsReportAction";
import { GET_VISUALIZE_ACTION } from "../constants/vsReportConstant";
import request from "../../utils/request";
import { VSREPORT_URL } from "../../urlConfig";
import { hanldeError } from "../../utils/handleError";

export function* vsReportAction() {
  try {
    const data = yield call(request, `${VSREPORT_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(data);
    if (data) {
      localStorage.setItem("vsReport", JSON.stringify(data));
      yield put(getVsReportSuccess(data));
    }
  } catch (error) {
    yield put(getVsReportFailed(error));
    hanldeError(error);
  }
}

export default function* vsReportSaga() {
  yield takeLatest(GET_VISUALIZE_ACTION, vsReportAction);
}
