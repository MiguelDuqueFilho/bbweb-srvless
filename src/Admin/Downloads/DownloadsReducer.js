const INITIAL_STATE = {
  listDownloads: [],
  listDownloadsAll: { docs: [], pages: 0, total: 0, page: 1 },
  fileUploadSelected: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DOWNLOAD_GET_ALL_FILES_REQUEST":
      return { ...state, listDownloadsAll: action.payload };
    case "DOWNLOAD_GET_FILES_REQUEST":
      return { ...state, listDownloads: action.payload };
    case "DOWNLOAD_SELECTED_FILES_UPLOAD":
      return { ...state, fileUploadSelected: action.payload };
    case "DOWNLOAD_FILE_REQUEST":
      return state;
    case "DOWNLOAD_FILE_SUCCESS":
      return state;
    case "DOWNLOAD_FILE_ERROR":
      return state;
    default:
      return state;
  }
};
