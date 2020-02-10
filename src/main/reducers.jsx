import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import AuthReducer from "../auth/AuthReducer";
import DashboardReducer from "../Admin/Dashboard/DashboardReducer";
import EventsReducer from "../Admin/Events/EventsReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  events: EventsReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
