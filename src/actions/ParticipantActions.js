import firebaseApp from ".././Firebase/firebase";
import { getDeviceToken, d_Token } from ".././Firebase/pushNotification";

var eventDetails = {};

export function ListEvents(state) {
  return dispatch => {
    getEvents().then(res => {
      dispatch({ type: "LIST_EVENTS", events: res });
    });
  };
}

export function Interested(eventName) {
  return dispatch => {
    getEventDetails(eventName).then(res => {
      let obj = [];      
      getDeviceToken().then(res => {
        obj.push({
          email: firebaseApp.auth().currentUser.email,
          name: firebaseApp.auth().currentUser.email.split('@')[0],
          token: res,
        });
        UpdateParticipantList(eventName, obj)
          .then(res => {
            dispatch({ type: "INTERESTED", event_details: [res] });
          })
          .catch(err => {
            console.log(err);
          });
      }).catch(err => {
        console.log(err);
      });
    });
  };
}

export function Not_Interested(eventName) {
  return dispatch => {
    getEventDetails(eventName).then(res => {
      let obj = [];            
      removeParticipation(obj).then((res) => {
        UpdateParticipantList(eventName, res)
          .then(res => {
            dispatch({
              type: "NOT-INTERESTED",
              event_details: [res]
            });
          })
          .catch(err => {
            console.log(err);
          });
      }).catch(err => {
        console.log(err);
      })
      
    });
  };
}

export function AllEvents() {
  return dispatch => {
    getAllEventDetails().then(res => {
      dispatch({ type: "ALL_EVENTS", events: res });
    });
  };
}

async function getEvents() {
  let response = [];
  let details = {};
  await new Promise((resolve, reject) => {
    firebaseApp
      .database()
      .ref("eventsList/")
      .on("value", snapshot => {
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

async function UpdateParticipantList(eventName, participants) {
  await firebaseApp
    .database()
    .ref()
    .child(`eventsList/${eventName}`)
    .update({
      participants: participants
    });
    getEvents().then(() => AllEvents());
  return "event added successfully";
}

async function removeParticipation(arr) {
  const email = firebaseApp.auth().currentUser.email;
  let removedArr = [];
  await arr.filter(event => {
    if(event.email !== email)
      removedArr.push(event);
  });
  return removedArr;
}

async function getAllEventDetails() {
  let response = [];
  await new Promise((resolve, reject) => {
    resolve(eventDetails);
  }).then(res => {
    response = res;
  });
  return response;
}
