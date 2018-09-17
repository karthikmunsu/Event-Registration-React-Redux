import { initialState } from './CreateEventsReducer';

export default function(state = initialState, action) {
  switch (action.type) {
    case 'EVENT_DETAILS':
      return Object.assign({}, state, action.event_details[0], {update: true});
    case "UPDATE_EVENT":
      return Object.assign({}, state, { status: action.status });
    default:
      return state;
  }
}
