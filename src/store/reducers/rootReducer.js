// action - state management
import { GET_USERDATA_ACTION, GET_USERDATA_SUCCESS, GET_USERDATA_FAILED, CLEAR_USERDATA, CHANGE_LANG } from '../constants/rootConstant';

export const initialState = {
  userData: null,
  loading: false,
  error: false,
  success: false,
  language: 'vi'
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERDATA_ACTION:
      return {
        ...state,
        loading: true
      };
    case GET_USERDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userData: action.data
      };
    case GET_USERDATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case CLEAR_USERDATA:
      return {
        ...state,
        userData: null,
        loading: false,
        error: false,
        success: false
      };
    case CHANGE_LANG:
      return {
        ...state,
        language: action.lang
      };
    default:
      return state;
  }
};

export default userDataReducer;
