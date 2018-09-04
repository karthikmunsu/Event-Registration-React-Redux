const initialState = {
  name: 'karthik',
}

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case 'PROJECTS':
      return state.HomeReducer;
    default:
      return state;
  }
}