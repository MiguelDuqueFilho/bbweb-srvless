const INITIAL_STATE = {
  listDownloads: [],
  listDownloadsAll: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DOWNLOAD_GET_ALL_FILES_REQUEST":
      return { ...state, listDownloadsAll: action.payload };
    case "DOWNLOAD_GET_FILES_REQUEST":
      return { ...state, listDownloads: action.payload };
    default:
      return state;
  }
};
