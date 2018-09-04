import firebaseApp from '.././Firebase/firebase';

export function UserSignUp(credentials) {
  console.log('signup');
  return (dispatch) => {
    FirebaseSignUp(credentials).then(res => dispatch({
      type: 'SIGN_UP',
      isAuth: res,
    }));
  }
}

export function UserSignIn(credentials) {
  console.log('signin')
  return dispatch => {
    FirebaseSignIn(credentials).then(res =>
      dispatch({
        type: "SIGN_IN",
        res
      })
    );
  };
};

async function FirebaseSignUp(credentials) {
  let result;
  await firebaseApp
    .auth()
    .createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(res => {
      if(res.additionalUserInfo.isNewUser)
        result = 'Success';
    })
    .catch(err => {
        result = err.message;
    });
    return result;
}

async function FirebaseSignIn(credentials) {
  let result;
  await firebaseApp
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(res => {
      result = res.user;
    })
    .catch(err => {
      result = {msg:err.message};
    })
    return result;
}
