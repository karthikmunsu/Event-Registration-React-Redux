import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import ListEventsReducer from './ListEventsReducer';
import CreateEventsReducer from './CreateEventsReducer';
import EditEventReducer from './EditEventReducer';
import ParticipantReducer from './ParticipantReducer';

const rootReducer = combineReducers({
  HomeReducer,
  LoginReducer,
  SignUpReducer,
  ListEventsReducer,
  CreateEventsReducer,
  EditEventReducer,
  ParticipantReducer,
});

export default rootReducer;