import { combineReducers } from 'redux';

// reducer import
import loginReducer from './reducers/loginReducer';
import rootReducer from './reducers/rootReducer';
import workspacesReducer from './reducers/workspacesReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  globalData: rootReducer,
  login: loginReducer,
  workspaces: workspacesReducer,
});

export default reducer;
