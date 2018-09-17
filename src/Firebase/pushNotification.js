import firebaseApp from './firebase';

console.log('push notification is working...');

const messaging = firebaseApp.messaging();

export default function PushNotification() {
  getDeviceToken();

  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(currentToken => {
        // console.log(`current token : => ${currentToken}`);
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
      // console.log(`Token => ${token}`);
      deviceToken = token;
      return token;
    })
    .catch(function(err) {
      console.log(`error in permission ${err}`);
      return err;
    });
  return deviceToken;
}

export const d_Token = getDeviceToken().then(res => res);