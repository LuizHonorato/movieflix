import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import MyList from '../pages/MyList';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />

    <Route path="/dashboard" isPrivate exact component={Dashboard} />
    <Route path="/details" isPrivate exact component={Details} />
    <Route path="/my-list" isPrivate exact component={MyList} />
    <Route path="/profile" isPrivate exact component={Profile} />
  </Switch>
);

export default Routes;
