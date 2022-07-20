// action - state management
import {
  register_ACTION,
  register_SUCCESS,
  register_FAILED,
} from "../constants/registerConstant";

export const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case register_ACTION:
      return {
        ...state,
        loading: true,
      };
    case register_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case register_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default registerReducer;
