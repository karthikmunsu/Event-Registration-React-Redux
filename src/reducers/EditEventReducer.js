import { initialState } from './CreateEventsReducer';

export default function(state = null, action) {
  switch (action.type) {
    case "UPDATE_EVENT":
      return Object.assign({}, initialState, { status: action.status });
    default:
      return state;
  }
}
