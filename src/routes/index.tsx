import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />

    <Route path="/dashboard" isPrivate exact component={Dashboard} />
    <Route path="/details" isPrivate exact component={Details} />
  </Switch>
);

export default Routes;
