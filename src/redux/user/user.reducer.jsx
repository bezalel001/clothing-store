// the state is current state which is none when the application first mounts
// we therefore need to set an initial state
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;