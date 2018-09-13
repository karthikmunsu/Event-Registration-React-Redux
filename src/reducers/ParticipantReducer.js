const initialState = {
  events: [],
  status: false,
};

export default function  ParticipantReducer(state = initialState, action) {
  switch (action.type) {
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
