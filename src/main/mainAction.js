import api from "../services/api";

const INITIAL_VALUES_TOGGLE = {
  toggle: false,
};

export function toggleChanged(value = INITIAL_VALUES_TOGGLE) {
  return (dispatch) => {
    dispatch([
      {
        type: "TOGGLE_CHANGED",
        payload: value,
      },
    ]);
  };
}

const INITIAL_VALUES_SEARCH_HEADER = {
  searchHeader: "",
};

export function setSearchHeader(value = INITIAL_VALUES_SEARCH_HEADER) {
  return (dispatch) => {
    dispatch([
      {
        type: "SET_SEARCH_HEADER",
        payload: value.search,
      },
    ]);
  };
}

export async function setEventSelected(eventId = 0) {
  const request = await api.get(`/events/${eventId}`);
  return {
    type: "HEADER_EVENT_SELECTED",
    payload: request.data.data[0],
  };
}

export async function clearSelected() {
  return {
    type: "HEADER_EVENT_SELECTED",
    payload: {},
  };
}
