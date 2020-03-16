const INITIAL_STATE = {
  listUploads: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPLOADS_GET_LIST_REQUEST":
      return { ...state, listUploads: action.payload };

    default:
      return state;
  }
};
