import { put, takeLatest, call } from "redux-saga/effects";
import {
  registerSuccess,
  registerAction,
  registerFailed,
} from "../actions/registerAction";
import {
  register_ACTION,
  register_SUCCESS,
  register_FAILED,
} from "../constants/registerConstant";
import API from "../../utils/axios";
import { Register_URL } from "../../urlConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosSetAuthToken } from "../../utils/axios";
import { hanldeError } from "../../utils/handleError";
import { navigationRef } from "../../helpers/RootNavigation";
export function* registerActions(action) {
  // console.log(action.body);
  const newBody = {
    username: action.body.username,
    password: action.body.password,
    email: action.body.email,
    user_info: {
      compName: action.body.compName,
      title: action.body.title,
      birthday: action.body.birthday,
      phone: action.body.phone,
    },
  };
  try {
    const data = yield API.post(Register_URL, newBody);
    if (data) {
      yield put(registerSuccess(data));
      yield call(() => navigationRef.navigate("LoginScreen"));
    }
  } catch (error) {
    console.log("error", error);
    // hanldeError(error);

    yield put(registerFailed(error));
  }
}

export default function* RegisterSaga() {
  yield takeLatest(register_ACTION, registerActions);
  yield takeLatest(register_SUCCESS, registerSuccess);
  yield takeLatest(register_FAILED, registerFailed);

  // yield takeLatest(LOGIN_ACTION, loginAction);
}
