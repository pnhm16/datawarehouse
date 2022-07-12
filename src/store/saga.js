import { fork } from 'redux-saga/effects';
import LoginSaga from './sagas/loginSaga';
import UserDataSaga from './sagas/userDataSaga';
import WorkspacesSaga from './sagas/workspacesSaga';

function* rootSaga() {
  yield fork(LoginSaga);
  yield fork(UserDataSaga);
  yield fork(WorkspacesSaga);
}

export default rootSaga;
