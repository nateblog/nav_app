import { combineReducers } from 'redux';
import appReducers from './reducers/index';
import loginReducers from './components/login/reducers/index';

const rootReducer = combineReducers({
  appReducers,
  loginReducers
});

export default rootReducer;
