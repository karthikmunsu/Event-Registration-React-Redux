const initialState = {
  events: [],
  event_details: [],
};

export default function ListEventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIST_EVENTS':
      return Object.assign({}, state, {events: action.events});
    case 'EVENT_DETAILS':
      return Object.assign({}, state, {event_details: action.event_details});
    case 'DELETE_EVENT':
      return Object.assign({}, state);
    default:
      return state;
  }
}