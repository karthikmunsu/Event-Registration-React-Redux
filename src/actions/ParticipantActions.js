import firebaseApp from ".././Firebase/firebase";
import { getDeviceToken, d_Token } from ".././Firebase/pushNotification";

var eventDetails = {};

export function ListEvents(state) {
  return dispatch => {
    getEvents().then(res => {
      console.log(res);
      dispatch({ type: "LIST_EVENTS", events: res });
    });
  };
}

export function Interested(eventName) {
  return dispatch => {
    getEventDetails(eventName).then(res => {
      let obj = res.participants ? res.participants : [];
      getDeviceToken().then(res => {
        obj.push({
          email: firebaseApp.auth().currentUser.email,
          name: firebaseApp.auth().currentUser.email.split('@')[0],
          token: res,
        });
        UpdateParticipantList(eventName, obj)
          .then(res => {
            dispatch({ type: "EVENT_DETAILS", event_details: [res] });
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
      let obj = res.participants ? res.participants : [];
      removeParticipation(obj).then((res) => {
        UpdateParticipantList(eventName, res)
          .then(res => {
            dispatch({ type: "EVENT_DETAILS", event_details: [res] });
            eventDetails[eventName].participants = res;
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
  console.log(participants);
  await firebaseApp
    .database()
    .ref(`eventsList/${eventName}`)
    .set({
      created_by: "karthik",
      participants: participants,
    });
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
