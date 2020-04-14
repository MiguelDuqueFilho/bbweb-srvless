const INITIAL_STATE = {
  listDepositions: [],
  listDepositionsAll: { docs: [], pages: 0, total: 0, page: 1 },
  fileUploadSelectImg: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEPOSITION_GET_ALL_FILES_REQUEST":
      return { ...state, listDepositionsAll: action.payload };
    case "DEPOSITION_GET_FILES_REQUEST":
      return { ...state, listDepositions: action.payload };
    case "DEPOSITION_SELECTED_FILES_UPLOAD":
      return { ...state, fileUploadSelectImg: action.payload };
    case "DEPOSITION_FILE_REQUEST":
      return state;
    case "DEPOSITION_FILE_SUCCESS":
      return state;
    case "DEPOSITION_FILE_ERROR":
      return state;
    default:
      return state;
  }
};
