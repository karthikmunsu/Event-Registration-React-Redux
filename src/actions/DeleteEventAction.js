import { store } from "../index";
import firebaseApp from ".././Firebase/firebase";

export default function removeEvent(eventName) {
  return dispatch => {
    deleteEventFromFirebase(eventName).then(res =>
      dispatch({
        type: "DELETE_EVENT",
        status: res,
      })
    );
  }
}

async function deleteEventFromFirebase(eventName) {
  await firebaseApp
    .database()
    .ref(`events/${eventName}`)
    .remove();
  return "Event Has Been Deleted Sucessfully!"
}
