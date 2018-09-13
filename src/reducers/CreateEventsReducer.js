export const initialState = {
  eventName: '',
  description: '',
  duration: 0,
  locations: '',
  fees: 0,
  tags: [],
  max_people: 0,
  created_by: '',
  modified_by: '',
  participants: [],
  status: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_EVENT':
      return Object.assign({}, state, {status: action.status})
    default:
      return state;
  }
}
