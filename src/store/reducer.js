import { combineReducers } from "redux";

// reducer import
import loginReducer from "./reducers/loginReducer";
import rootReducer from "./reducers/rootReducer";
import workspacesReducer from "./reducers/workspacesReducer";
import datasetsReducer from "./reducers/datasetsReducer";
import userReducer from "./reducers/userReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import registerReducer from "./reducers/registerReducer";
import reportsReducer from "./reducers/reportsReducer";

import token from "./reducers/tokenReducers";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  globalData: rootReducer,
  login: loginReducer,
  workspaces: workspacesReducer,
  token,
  datasets: datasetsReducer,
  user: userReducer,
  favorite: favoriteReducer,
  registerReducer,
  reportsReducer,
});

export default reducer;
