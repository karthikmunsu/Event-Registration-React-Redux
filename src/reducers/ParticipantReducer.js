import firebaseApp from ".././Firebase/firebase";

const initialState = {
  events: [],
  eventsList: [],
  status: false,
  userEmail: 'karthikmunsu@gmaill.com',
  isUpdated: '',
};

export default function  ParticipantReducer(state = initialState, action) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return Object.assign({}, state, { eventsList: action.events });      
    case 'LIST_EVENTS':
      return Object.assign({}, state, {events: action.events});
    case 'INTERESTED':
      return Object.assign({}, state, {isUpdated: action.events});
    case 'NOT-INTERESTED':
      return Object.assign({}, state, { isUpdated: action.event_details });      
    default:
      return state;
  }
}
