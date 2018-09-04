import { store } from "../index";

export default function updateEvent(state) {
  return dispatch =>
    dispatch({
      type: "UPDATE_EVENTS",
      events: state
    });
}
