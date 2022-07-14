// action - state management
import {
  LIST_CURRENT_USER_ACTION,
  LIST_CURRENT_USER_SUCCESS,
  LIST_CURRENT_USER_FAILED,
} from "../constants/userConstant";

export const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CURRENT_USER_ACTION:
      return {
        ...state,
        loading: true,
      };
    case LIST_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case LIST_CURRENT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
