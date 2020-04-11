const INITIAL_STATE = {
  show: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MODAL_CLOSED":
      return { ...state, show: action.payload };
    case "MODAL_OPEN":
      return { ...state, show: action.payload };
    default:
      return state;
  }
}
