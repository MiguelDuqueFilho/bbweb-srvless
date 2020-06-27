const INITIAL_STATE = {
  listEvents: { docs: [], pages: 0, total: 0, page: 1 },
  fileUploadSelectImg: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EVENTS_LIST_FETCHED":
      return { ...state, listEvents: action.payload };
    case "EVENT_SELECTED_FILES_UPLOAD":
      return { ...state, fileUploadSelectImg: action.payload };
    default:
      return state;
  }
}
