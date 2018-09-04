import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import ListEventsReducer from './ListEventsReducer';
import CreateEventsReducer from './CreateEventsReducer';

const rootReducer = combineReducers({
  HomeReducer,
  LoginReducer,
  SignUpReducer,
  ListEventsReducer,
  CreateEventsReducer,
});

export default rootReducer;