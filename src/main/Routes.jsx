import React from "react";
import { Switch, Route, Redirect } from "react-router";

// import AuthOrApp from "./AuthOrApp";

import DashBoard from "../Admin/Dashboard/Dashboard";
import Events from "../Admin/Events/Events";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/admin" component={DashBoard} />
      <Route path="/admin/Dashboard" component={DashBoard} />
      <Route path="/admin/events" component={Events} />
      <Redirect from="*" to="/admin" />
    </Switch>
  </div>
);
