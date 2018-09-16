import { store } from '../index';
import { insertDataIntoFirebase } from './CreateEventsActions';

export default function updateEvent(state) {
  return (dispatch) => {
    insertDataIntoFirebase(state).then(res => dispatch({
      type: 'UPDATE_EVENT',
      status: res,
    }))
  }
};

// console.log(store.getState().ListEventsReducer);