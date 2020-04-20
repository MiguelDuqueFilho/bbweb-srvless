const INITIAL_STATE = {
  summary: {
    taskSummary: {},
    taskPercent: {},
    dataTaskChat: [],
    dataTaskPercent: [],
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DASHBOARD_SUMMARY_FETCHED":
      return { ...state, summary: action.payload };
    default:
      return state;
  }
}
