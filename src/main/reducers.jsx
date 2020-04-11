import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import mainReducer from "./mainReducer";
import AuthReducer from "../auth/AuthReducer";
import SiteReducer from "../site/SiteReducer";
import DashboardReducer from "../Admin/Dashboard/DashboardReducer";
import EventsReducer from "../Admin/Events/EventsReducer";
import UsersReducer from "../Admin/Users/UsersReducer";
import TabReducer from "../common/Tabs/tabReducer";
import DownloadsReducer from "../Admin/Downloads/DownloadsReducer";
import UploadsReducer from "../Admin/Uploads/UploadsReducer";
import TasksReducer from "../Admin/Tasks/TasksReducer";
import ModalReducer from "../component/Modal/ModalReducer";

const rootReducer = combineReducers({
  app: mainReducer,
  auth: AuthReducer,
  site: SiteReducer,
  dashboard: DashboardReducer,
  tab: TabReducer,
  events: EventsReducer,
  tasks: TasksReducer,
  users: UsersReducer,
  form: formReducer,
  downloads: DownloadsReducer,
  uploads: UploadsReducer,
  toastr: toastrReducer,
  modal: ModalReducer,
});

export default rootReducer;
