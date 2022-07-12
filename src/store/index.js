import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';
// ==============================|| REDUX - MAIN STORE ||============================== //
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
  ];
  
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }
const store = createStore(reducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
export { store };
