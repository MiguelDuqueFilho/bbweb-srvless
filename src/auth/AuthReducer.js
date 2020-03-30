const userKey = "_bebride_user";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOKEN_VALIDATED":
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case "USER_LOGOFF":
    case "USER_FORGOTED":
      localStorage.removeItem(userKey);
      return { ...state, validToken: false, user: null };
    case "USER_FETCHED":
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return {
        ...state,
        validToken: true,
        user: action.payload,
        recoveryToken: false
      };
    default:
      return state;
  }
};
