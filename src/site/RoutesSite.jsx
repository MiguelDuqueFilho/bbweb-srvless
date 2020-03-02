import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Site from "../site/Site";
import PlanDetail from "../site/PlanDetail";
import Auth from "../auth/Auth";
import AuthOrApp from "../main/AuthOrApp";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/advice_complete" component={PlanDetail} />
      <Route path="/advice_consulting" component={PlanDetail} />
      <Route path="/advice_requests" component={PlanDetail} />
      <Route path="/advice_last" component={PlanDetail} />
      <Route path="/login" component={Auth} />
      <Route path="/admin" component={AuthOrApp} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
