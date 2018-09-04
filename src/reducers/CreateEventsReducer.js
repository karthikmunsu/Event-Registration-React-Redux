const initialState = {
  eventName: '',
  description: '',
  duration: 0,
  location: '',
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
      return Object.assign({}, initialState, {status: action.status})
    default:
      return state;
  }
}
