import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import AuthReducer from "../auth/AuthReducer";
import DashboardReducer from "../Admin/Dashboard/DashboardReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
