import { put, takeLatest, call, takeEvery, ge } from "redux-saga/effects";
import {
  getWorkspacesSuccess,
  getWorkspacesFailed,
} from "../actions/workspacesAction";
import { GET_WORKSPACES_ACTION } from "../constants/workspacesConstant";
import API from "../../utils/axios";
import { hanldeError } from "../../utils/handleError";

import { USERLIST_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export function* workspacesDataAction() {
  try {
    const res = yield API.get(`${USERLIST_URL}workspaces/`);
    console.log({ res });
    // const data = yield call(request, `${USERLIST_URL}workspaces/`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });

    // // console.log('data', data);
    if (res) {
      // AsyncStorage.setItem("workspaces", JSON.stringify(data));
      yield put(getWorkspacesSuccess(res));
    }
  } catch (error) {
    console.log("error", error);
    yield put(getWorkspacesFailed(error));
    hanldeError(error);
  }
}

export default function* WorkspacesSaga() {
  yield takeLatest(GET_WORKSPACES_ACTION, workspacesDataAction);
}
