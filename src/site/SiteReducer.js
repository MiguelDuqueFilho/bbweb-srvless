const INITIAL_STATE = {
  sendemail: false,
  eventTypes: [],
  siteDepositions: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SENDEMAIL_FETCHED":
      return { ...state, sendemail: true };
    case "EVENTTYPES_FETCHED":
      return { ...state, eventTypes: action.payload };
    case "DEPOSITIONS_SITE_FETCHED":
      return { ...state, siteDepositions: action.payload };
    default:
      return state;
  }
};
