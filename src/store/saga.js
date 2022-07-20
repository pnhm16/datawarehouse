import { fork, all } from "redux-saga/effects";
import LoginSaga from "./sagas/loginSaga";
import UserDataSaga from "./sagas/userDataSaga";
import WorkspacesSaga from "./sagas/workspacesSaga";
import datasetsSaga from "./sagas/datasetsSaga";
import userSaga from "./sagas/userSaga";
import favoriteSaga from "./sagas/favoriteSaga";
import registerSaga from "./sagas/registerSaga";

export default function* rootSaga() {
  yield all([
    fork(LoginSaga),
    fork(UserDataSaga),
    fork(datasetsSaga),
    fork(WorkspacesSaga),
    fork(userSaga),
    fork(favoriteSaga),
    fork(registerSaga),
  ]);
}
