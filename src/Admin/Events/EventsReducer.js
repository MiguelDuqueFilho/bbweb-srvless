const INITIAL_STATE = { listEvents: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EVENTS_LIST_FETCHED":
      return { ...state, listEvents: action.payload.data };
    default:
      return state;
  }
}
