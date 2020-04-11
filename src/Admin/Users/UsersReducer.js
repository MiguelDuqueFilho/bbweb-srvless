const INITIAL_STATE = { listUsers: { docs: [], pages: 0, total: 0, page: 1 } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USERS_LIST_FETCHED":
      return { ...state, listUsers: action.payload };
    default:
      return state;
  }
}
