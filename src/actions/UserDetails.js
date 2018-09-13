import firebaseApp from ".././Firebase/firebase";

const User = async function() {return await firebaseApp.auth();};
const dateObj = new Date();

export let USER_EMAIL = "";
export let USER_NAME = "";
export const DATE = `${dateObj.getDate()}-${dateObj.getMonth()+1}-${dateObj.getFullYear()}`;


  User().then(res => {
    USER_EMAIL = res.email;
    USER_NAME = res.email.split("@")[0];
  }).catch(err => {
    console.log(err);
  });
