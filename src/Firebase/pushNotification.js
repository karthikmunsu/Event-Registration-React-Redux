import firebaseApp from './firebase';

console.log('push notification is working...');

const messaging = firebaseApp.messaging();

export default function PushNotification() {
  messaging
    .requestPermission()
    .then(function() {
      console.log("permisssion granted");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log(`Token => ${token}`);
    })
    .catch(function(err) {
      console.log(err);
    });

  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(currentToken => {
        console.log(`current token : => ${currentToken}`);
      })
      .catch(err => {
        console.log("error on token retrival");
      });
  });
}
