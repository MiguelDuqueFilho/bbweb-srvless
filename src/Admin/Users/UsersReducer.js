const INITIAL_STATE = { listUsers: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USERS_LIST_FETCHED":
      return { ...state, listUsers: action.payload };
    default:
      return state;
  }
}
