import { put, takeLatest, call, takeEvery, ge } from "redux-saga/effects";
import { userAction, userSuccess, userFailed } from "../actions/userAction";
import { LIST_CURRENT_USER_ACTION } from "../constants/userConstant";
import API from "../../utils/axios";
import { USERLIST_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { hanldeError } from "../../utils/handleError";

export function* usersAction() {
  try {
    const res = yield API.get(`${USERLIST_URL}1/`);
    console.log(res);

    if (res) {
      yield put(userSuccess(res));
    }
  } catch (error) {
    console.log("error", error);
    hanldeError(error);

    yield put(userFailed(error));
  }
}

export default function* usersSaga() {
  yield takeLatest(LIST_CURRENT_USER_ACTION, usersAction);
}
