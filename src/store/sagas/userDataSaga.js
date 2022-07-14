import { put, takeLatest, call } from "redux-saga/effects";
import { getUserDataSuccess, getUserDataFailed } from "../actions/rootAction";
import { GET_USERDATA_ACTION } from "../constants/rootConstant";
import request from "../../utils/request";
import { USERDATA_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hanldeError } from "../../utils/handleError";

export function* userDataAction() {
  try {
    const data = yield call(request, `${USERDATA_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
      },
    });
    if (data) {
      AsyncStorage.setItem("userData", JSON.stringify(data));
      yield put(getUserDataSuccess(data));
    }
  } catch (error) {
    yield put(getUserDataFailed(error));
    hanldeError(error);
  }
}

export default function* UserDataSaga() {
  yield takeLatest(GET_USERDATA_ACTION, userDataAction);
  // yield takeLatest(userData_ACTION, userDataAction);
}
