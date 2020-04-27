const INITIAL_STATE = {
  listUploads: { docs: [], pages: 0, total: 0, page: 1 },
  listUploadsDoc: [],
  listUploadsImg: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPLOADS_GET_LIST_REQUEST":
      return { ...state, listUploads: action.payload };
    case "UPLOADS_GET_DOC_REQUEST":
      return { ...state, listUploadsDoc: action.payload };
    case "UPLOADS_GET_IMG_REQUEST":
      return { ...state, listUploadsImg: action.payload };
    default:
      return state;
  }
};
