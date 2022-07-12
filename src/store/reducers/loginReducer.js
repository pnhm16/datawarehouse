// action - state management
import { RESET_ACTION, LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/loginConstant';

export const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ACTION:
      return {
        ...state,
        data: [],
        loading: false,
        error: false,
        success: false
      };
    case LOGIN_ACTION:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
