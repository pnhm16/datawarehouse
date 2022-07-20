import {
  register_SUCCESS,
  register_FAILED,
  register_ACTION,
} from "../constants/registerConstant";

export const registerAction = (body) => ({
  type: register_ACTION,
  body,
});

export const registerSuccess = (data) => ({
  type: register_SUCCESS,
  data,
});

export const registerFailed = (err) => ({
  type: register_FAILED,
  err,
});
