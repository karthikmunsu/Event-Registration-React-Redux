import firebaseApp from ".././Firebase/firebase";

var eventDetails = {};

export default function fetchEvents() {
  return (dispatch) => {
    getEvents().then(res => {
      dispatch({
        type: 'LIST_EVENTS',
        events: res,
      });
    })
  }
}

export function fetchEventDetails(eventName) {
  return (dispatch) => {
    getEventDetails(eventName).then(res => {
      dispatch({
        type: 'EVENT_DETAILS',
        event_details: [res],
      });
    })
  }
}

async function getEvents() {
  let response = [];
  let details = {};
  await new Promise((resolve, reject) => {
    firebaseApp
    .database()
    .ref("events/").on('value', snapshot => {
      details = snapshot.val();
      resolve(snapshot.val());
    });
  }).then(res => {
    response = Object.keys(res);
  });
  eventDetails = details;
  return response;
}

async function getEventDetails(eventName) {
  let response = [];
  await new Promise((resolve, reject) => {
    resolve(eventDetails[eventName]);
  }).then(res => {
    response = res;
  });
  return response;
}
