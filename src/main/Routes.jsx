import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import './app.css';
import DashBoard from '../Admin/Dashboard/Dashboard';
import Downloads from '../Admin/Downloads/Downloads';
import Depositions from '../Admin/Depositions/Depositions';
import Uploads from '../Admin/Uploads/Uploads';
import DownloadsView from '../Admin/Downloads/DownloadsView';
import Users from '../Admin/Users/Users';
import Events from '../Admin/Events/Events';
import Tasks from '../Admin/Tasks/Tasks';

export default class Routes extends Component {
  typePath() {
    switch (this.props.userType) {
      case 0:
        return (
          <Switch>
            <Route exact path='/guest' component={DownloadsView} />
            <Route path='/guest/downloads' component={DownloadsView} />
            <Redirect from='*' to='/guest' />
          </Switch>
        );
      case 1:
        return (
          <Switch>
            <Route exact path='/admin' component={DashBoard} />
            <Route path='/admin/dashboard' component={DashBoard} />
            <Route path='/admin/users' component={Users} />
            <Route path='/admin/events' component={Events} />
            <Route path='/admin/downloads' component={Downloads} />
            <Route path='/admin/uploads' component={Uploads} />
            <Route path='/admin/tasks' component={Tasks} />
            <Route path='/admin/depositions' component={Depositions} />
            <Redirect from='*' to='/admin' />
          </Switch>
        );
      case 2:
        return (
          <Switch>
            <Route exact path='/client' component={DashBoard} />
            <Route path='/client/dashboard' component={DashBoard} />
            <Route path='/client/downloads' component={DownloadsView} />
            <Redirect from='*' to='/client' />
          </Switch>
        );
      case 3:
        return (
          <Switch>
            <Route exact path='/partner' component={DashBoard} />
            <Route path='/partner/dashboard' component={DashBoard} />
            <Redirect from='*' to='/partner' />
          </Switch>
        );
      default:
        return (
          <Switch>
            <Redirect from='*' to='/' />
          </Switch>
        );
    }
  }

  render() {
    return <div className='content-wrapper mt-2'>{this.typePath()}</div>;
  }
}
