const INITIAL_VALUES = {
  toggle: false
};

export function toggleChanged(value = INITIAL_VALUES) {
  return dispatch => {
    dispatch([
      {
        type: "TOGGLE_CHANGED",
        payload: value
      }
    ]);
  };
}
