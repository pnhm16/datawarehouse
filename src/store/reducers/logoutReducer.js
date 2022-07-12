// action - state management
import { RESET_ACTION, LOGOUT_ACTION, LOGOUT_SUCCESS, LOGOUT_FAILED } from '../constants/logoutConstant';

export const initialState = {
  loading: false,
  error: false,
  success: false
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ACTION:
      return {
        ...state,
        loading: false,
        error: false,
        success: false
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default logoutReducer;
