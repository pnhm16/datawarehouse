// action - state management
import { TOKEN } from "../constants/loginConstant";

export const initialState = {
  token: "",
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default tokenReducer;
