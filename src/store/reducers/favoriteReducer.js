// action - state management
import {
  FAVORITE_ACTION,
  FAVORITE_ACTION_FAILED,
  FAVORITE_ACTION_SUCCESS,
} from "../constants/favoriteConstant";

export const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_ACTION:
      return {
        ...state,
        loading: true,
      };
    case FAVORITE_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case FAVORITE_ACTION_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
