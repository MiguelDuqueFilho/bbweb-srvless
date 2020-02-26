const INITIAL_STATE = {
  sendemail: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SENDEMAIL_FETCHED":
      return { ...state, sendemail: true };
    case "EVENTTYPES_FETCHED":
      return { ...state, eventTypes: action.payload };
    case "EVENTSTATUS_FETCHED":
      return { ...state, eventStatus: action.payload };
    default:
      return state;
  }
};
