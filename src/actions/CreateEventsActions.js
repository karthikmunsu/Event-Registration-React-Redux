import firebaseApp from ".././Firebase/firebase";

export default function createEvent(state) {
  return (dispatch) => {
    insertDataIntoFirebase(state).then(res => dispatch({
      type: 'CREATE_EVENT',
      status: res,
    }))
  }
};

async function insertDataIntoFirebase(state) {
  await firebaseApp
    .database()
    .ref(`events/${state.eventName}`)
    .set({
      event_name: state.eventName,
      event_description: state.eventName,
      duration: state.duration,
      location: state.location,
      fees: state.fees,
      tags: state.tags,
      max_people: state.max_people,
      created_by: state.created_by,
      created_at: new Date(),
      modififed_by: state.modified_by,
      modified_at: new Date(),
      participants: state.participants
    });
  return "Event has been created sucessfully!"
}
