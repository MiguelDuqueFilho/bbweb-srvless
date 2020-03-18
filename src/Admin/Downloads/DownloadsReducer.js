const INITIAL_STATE = {
  listDownloads: [],
  listDownloadsAll: [],
  fileUploadSelected: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DOWNLOAD_GET_ALL_FILES_REQUEST":
      return { ...state, listDownloadsAll: action.payload };
    case "DOWNLOAD_GET_FILES_REQUEST":
      return { ...state, listDownloads: action.payload };
    case "DOWNLOAD_SELECTED_FILES_UPLOAD":
      return { ...state, fileUploadSelected: action.payload };
    default:
      return state;
  }
};
