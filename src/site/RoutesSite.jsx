import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Site from "../site/Site";
import PlanDetail from "../site/PlanDetail";
import Auth from "../auth/Auth";
import AuthRecovery from "../auth/AuthRecovery";
import AuthOrApp from "../main/AuthOrApp";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/advice_complete" component={PlanDetail} />
      <Route path="/advice_consulting" component={PlanDetail} />
      <Route path="/advice_requests" component={PlanDetail} />
      <Route path="/advice_last" component={PlanDetail} />
      <Route path="/recovery_password/:token" component={AuthRecovery} />
      <Route path="/login" component={Auth} />
      <Route path="/guest" component={AuthOrApp} />
      <Route path="/admin" component={AuthOrApp} />
      <Route path="/client" component={AuthOrApp} />
      <Route path="/partner" component={AuthOrApp} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
