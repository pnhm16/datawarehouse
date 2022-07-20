import { put, takeLatest } from "redux-saga/effects";
import { AUTH_URL } from "../../urlConfig";
import API from "../../utils/axios";
import { hanldeError } from "../../utils/handleError";
import {
  getDatasetsFailed,
  getDatasetsSuccess,
  getDatasetsAction,
} from "../actions/datasetAction";
import { GET_DATASETS_ACTION } from "../constants/datasetsConstant";

export function* datasetsDataAction() {
  try {
    const data = yield API.get(`${AUTH_URL}/users/workspaces/2/datasets`);
    // console.log(data);
    if (data) {
      // localStorage.setItem("datasets", JSON.stringify(data));
      yield put(getDatasetsSuccess(data));
    }
  } catch (error) {
    // hanldeError(error);

    yield put(getDatasetsFailed(error));
  }
}

export default function* DatasetsSaga() {
  yield takeLatest(GET_DATASETS_ACTION, datasetsDataAction);
}
