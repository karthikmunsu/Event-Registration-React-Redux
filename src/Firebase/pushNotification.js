import firebaseApp from './firebase';

console.log('push notification is working...');

const messaging = firebaseApp.messaging();

export default function PushNotification() {
  getDeviceToken();

  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(currentToken => {
        console.log(`current token : => ${currentToken}`);
      })
      .catch(err => {
        console.log(`error on token retrival ${err}`);
      });
  });
}

export async function getDeviceToken() {
  var deviceToken = '';
  await messaging
    .requestPermission()
    .then(function() {
      console.log("permisssion granted");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log(`Token => ${token}`);
      deviceToken = token;
      return token;
    })
    .catch(function(err) {
      console.log(`error in permission ${err}`);
      return err;
    });
  return deviceToken;
}


export function sendNotification() {
  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key=AIzaSyD3kFAU8JbPwz64fhYAVwN-0FcimiQ3QWE"
    },
    body: {
      to:
        "dxXC4IjZ-ss:APA91bHAwie3Ofu0cejerTHJsp4bEl0FSt8jpprKvUDZOiBledzC_jwI95pTBwhZ-bXhzM_t0JN1qYPfV0IKssaMU0X3j8C6CPRxekq4xQj1yZsdqtLOr7dV1O-gZGgR432H8lx4rgKq",
      collapse_key: "type_a",
      notification: {
        body: "Event",
        title: "Collapsing A",
        icon: "./chargebee.png"
      },
      data: {
        body: "secod Notification",
        title: "Collapsing A",
        key_1: "Data for key one",
        key_2: "Hellowww"
      }
    }
  }).then(res => console.log(res)).catch(err => console.log(err));

}

export const d_Token = getDeviceToken().then(res => res);