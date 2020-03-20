const INITIAL_STATE = { toggle: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_CHANGED":
      return { ...state, toggle: action.payload };
    default:
      return state;
  }
}
