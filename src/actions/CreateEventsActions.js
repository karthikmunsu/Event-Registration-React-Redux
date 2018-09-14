import firebaseApp from ".././Firebase/firebase";
import { USER_EMAIL, DATE } from './UserDetails';

export default function createEvent(state) {
  return (dispatch) => {
    insertDataIntoFirebase(state).then(res => dispatch({
      type: 'CREATE_EVENT',
      status: res,
    }))
  }
};

export async function insertDataIntoFirebase(state) {
  await firebaseApp
    .database()
    .ref(`events/${state.eventName}`)
    .set({
      event_name: state.eventName,
      event_description: state.description,
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
      insertIntoEventsList(state.eventName, state.max_people);
    });
  return "Event has been created sucessfully!";    
}

export async function insertIntoEventsList(eventName, max_people) {
  await firebaseApp
      .database()
      .ref(`eventsList/${eventName}`)
      .set({
        created_by: USER_EMAIL,
        max_people: max_people,
      });
  return 'event added successfully';
}
