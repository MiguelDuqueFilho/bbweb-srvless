import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Site from '../site/Site';
// import PlanDetailDay from '../site/PlanDetailDay';
// import PlanDetailFinal from '../site/PlanDetailFinal';
// import PlanDetailCompleted from '../site/PlanDetailCompleted';
// import PlanDetailConsulting from '../site/PlanDetailConsulting';
// import Auth from '../auth/Auth';
// import AuthRecovery from '../auth/AuthRecovery';
// import AuthPassword from '../auth/AuthPassword';
// import AuthOrApp from '../main/AuthOrApp';

export default (props) => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Site} />
      {/* <Route path='/advice_day' component={PlanDetailDay} />
      <Route path='/advice_final' component={PlanDetailFinal} />
      <Route path='/advice_completed' component={PlanDetailCompleted} />
      <Route path='/advice_consulting' component={PlanDetailConsulting} />
      <Route path='/recovery_password/:token' component={AuthRecovery} />
      <Route path='/password' component={AuthPassword} />
      <Route path='/login' component={Auth} />
      <Route path='/guest' component={AuthOrApp} />
      <Route path='/admin' component={AuthOrApp} />
      <Route path='/client' component={AuthOrApp} />
      <Route path='/partner' component={AuthOrApp} /> */}
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);
