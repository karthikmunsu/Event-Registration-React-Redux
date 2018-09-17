import { store } from '../index';
import firebaseApp from ".././Firebase/firebase";
import { insertIntoEventsList } from './CreateEventsActions';
import { USER_EMAIL, DATE } from "./UserDetails";

export default function updateEvent(state) {
  return (dispatch) => {
    insertDataIntoFirebase(state).then(res => dispatch({
      type: 'UPDATE_EVENT',
      status: res,
    }))
  }
};

export async function insertDataIntoFirebase(state) {
  await firebaseApp
    .database()
    .ref(`events/${state.event_name}`)
    .set({
      event_name: state.event_name,
      event_description: state.event_description,
      duration: state.duration,
      locations: state.locations,
      fees: state.fees,
      tags: state.tags,
      max_people: state.max_people,
      created_by: USER_EMAIL,
      created_at: DATE,
      modified_by: USER_EMAIL,
      modified_at: DATE,
      participants: state.participants !== undefined ? state.participants : []
    })
    .then(() => {
      insertIntoEventsList(state.event_name, state.max_people);
    });
  return "Event has been created sucessfully!";
}

// console.log(store.getState().ListEventsReducer);
