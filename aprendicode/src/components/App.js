import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import { withAuthentication } from '../constants/Session';

import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import { Header } from './Header'
import { Footer } from './Footer'
import {About} from './About'
import {Explore} from './Explore'
import {Learn} from './Learn'
import {Start} from './Start'
import Lesson from './Lesson'

const App = () => (
  <Router>
    <Header />
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.LOGIN} component={Login} />
    <Route path={ROUTES.SIGNUP} component={SignUp} />
    <Route path={ROUTES.ABOUT} component={About} />
    <Route path={ROUTES.EXPLORE} component={Explore} />
    <Route path={ROUTES.LEARN} component={Learn} />
    <Route path={ROUTES.START} component={Start} />
    <Route path={ROUTES.LESSON} component={Lesson} />
    <Footer />
  </Router>
);

export default withAuthentication(App);
