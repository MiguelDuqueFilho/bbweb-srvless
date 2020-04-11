const INITIAL_STATE = { listTasks: { docs: [], pages: 0, total: 0, page: 1 } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TASKS_LIST_FETCHED":
      return { ...state, listTasks: action.payload };
    default:
      return state;
  }
}
