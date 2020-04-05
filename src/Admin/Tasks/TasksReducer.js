const INITIAL_STATE = { listTasks: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TASKS_LIST_FETCHED":
      return { ...state, listTasks: action.payload };
    default:
      return state;
  }
}
