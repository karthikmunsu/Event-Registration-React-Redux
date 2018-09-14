import firebaseApp from ".././Firebase/firebase";

const initialState = {
  events: [],
  eventsList: [],
  status: false,
  userEmail: 'karthikmunsu@gmaill.com',
};

export default function  ParticipantReducer(state = initialState, action) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return Object.assign({}, state, { eventsList: action.events });      
    case 'LIST_EVENTS':
      return Object.assign({}, state, {events: action.events});
    case 'INTERESTED':
      return state;
    case 'NOT-INTERESTED':
      return state;
    default:
      return state;
  }
}
