import { store } from '../index';
import { sendNotification } from '.././Firebase/pushNotification';
import { insertDataIntoFirebase } from './CreateEventsActions';

export default function updateEvent(state) {
  return (dispatch) => {
    sendNotification();
    insertDataIntoFirebase(state).then(res => dispatch({
      type: 'UPDATE_EVENT',
      status: res,
    }))
  }
};

// console.log(store.getState().ListEventsReducer);