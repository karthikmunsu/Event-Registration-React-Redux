const initialState = {
  email: '',
  password: '',
  res: {},
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {res: action.res});          
    default:
      return state;
  }
}