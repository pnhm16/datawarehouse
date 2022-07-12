import { RESET_ACTION, LOGOUT_ACTION, LOGOUT_SUCCESS, LOGOUT_FAILED } from '../constants/logoutConstant';

export const resetAction = () => ({
  type: RESET_ACTION
});

export const logoutAction = () => ({
  type: LOGOUT_ACTION
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutFailed = (err) => ({
  type: LOGOUT_FAILED,
  err
});
