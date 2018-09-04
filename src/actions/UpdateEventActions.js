import { store } from '../index';

export default function getEvents() {
  return (dispatch) => dispatch({
    type: 'UPDATE_EVENTS',
    events: [],
  })
}

console.log(store.getState().ListEventsReducer);