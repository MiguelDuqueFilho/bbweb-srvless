const INITIAL_STATE = {
  listUploads: [],
  listUploadsPdf: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPLOADS_GET_LIST_REQUEST":
      return { ...state, listUploads: action.payload };
    case "UPLOADS_GET_PDF_REQUEST":
      return { ...state, listUploadsPdf: action.payload };
    default:
      return state;
  }
};