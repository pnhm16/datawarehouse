import {
  LIST_CURRENT_USER_FAILED,
  LIST_CURRENT_USER_SUCCESS,
  LIST_CURRENT_USER_ACTION,
} from "../constants/userConstant";

export const userAction = (body) => ({
  type: LIST_CURRENT_USER_ACTION,
  body,
});

export const userSuccess = (data) => ({
  type: LIST_CURRENT_USER_SUCCESS,
  data,
});

export const userFailed = (err) => ({
  type: LIST_CURRENT_USER_FAILED,
  err,
});
