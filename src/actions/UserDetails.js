import firebaseApp from ".././Firebase/firebase";

const UserDetails = JSON.parse(sessionStorage.getItem('user'));
const dateObj = new Date();
console.log(UserDetails);
export const USER_EMAIL = UserDetails ? UserDetails.email : '';
export const USER_NAME = UserDetails ? UserDetails.email.split('@')[0] : '';
export const DATE = `${dateObj.getDate()}-${dateObj.getMonth()+1}-${dateObj.getFullYear()}`;
