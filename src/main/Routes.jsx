import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../component/Home/Home";
import DashBoard from "../Admin/Dashboard/Dashboard";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={DashBoard} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

// ç
// import Dashboard from "../Admin/Dashboard/Dashboard";
// import Events from "../Admin/Events/Events";
// import PageLogin from "../main/PageLogin/PageLogin";
// import EButtons from "../component/Samples/EButtons/EButtons";
// import EAccordions from "../component/Samples/EAccordions/EAccordions";
// import ETabs from "../component/Samples/ETabs/ETabs";
// import CardTable from "../component/Samples/CardTable/CardTable";

// export default props => (
//   <Switch>
//     <Route exact path="/" component={AuthOrApp} />
//     {/* <Route exact path="/" component={Home} /> */}
//     <Route path="/dashboard" component={Dashboard} />
//     <Route path="/events" component={Events} />
//     <Route path="/login" component={PageLogin} />
//     <Route path="/buttons" component={EButtons} />
//     <Route path="/accordions" component={EAccordions} />
//     <Route path="/tabs" component={ETabs} />
//     <Route path="/cardtable" component={CardTable} />
//     <Redirect from="*" to="/" />
//   </Switch>
// );
