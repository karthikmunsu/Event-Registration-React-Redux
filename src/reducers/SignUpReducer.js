const initialState = {
  email: "",
  password: "",
  isAuth: ""
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return Object.assign({}, state, { isAuth: action.isAuth });
    default:
      return state;
  }
}
