const INITIAL_STATE = {
  toggle: false,
  search: { searchHeader: "", eventSelected: {} },
};

export default function (state = INITIAL_STATE, action) {
  let search = {};
  switch (action.type) {
    case "TOGGLE_CHANGED":
      return { ...state, toggle: action.payload };
    case "SET_SEARCH_HEADER":
      search = { ...state.search, searchHeader: action.payload };
      return { ...state, search };
    case "HEADER_EVENT_SELECTED":
      search = { ...state.search, eventSelected: action.payload };
      return { ...state, search };
    default:
      return state;
  }
}
