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
import {Lesson11} from './lessons/Lesson11'
import {Lesson12} from './lessons/Lesson12'
import {Lesson13} from './lessons/Lesson13'
import {Lesson14} from './lessons/Lesson14'
import {Lesson15} from './lessons/Lesson15'
import {Lesson16} from './lessons/Lesson16'
import {Lesson17} from './lessons/Lesson17'
import {Lesson21} from './lessons/Lesson21'
import {Lesson22} from './lessons/Lesson22'
import {Lesson23} from './lessons/Lesson23'
import {Lesson24} from './lessons/Lesson24'
import {Lesson25} from './lessons/Lesson25'
import {Lesson26} from './lessons/Lesson26'
import {Lesson27} from './lessons/Lesson27'

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
    <Route path={ROUTES.LESSON11} component={Lesson11} />
    <Route path={ROUTES.LESSON12} component={Lesson12} />
    <Route path={ROUTES.LESSON13} component={Lesson13} />
    <Route path={ROUTES.LESSON14} component={Lesson14} />
    <Route path={ROUTES.LESSON15} component={Lesson15} />
    <Route path={ROUTES.LESSON16} component={Lesson16} />
    <Route path={ROUTES.LESSON17} component={Lesson17} />
    <Route path={ROUTES.LESSON21} component={Lesson21} />
    <Route path={ROUTES.LESSON22} component={Lesson22} />
    <Route path={ROUTES.LESSON23} component={Lesson23} />
    <Route path={ROUTES.LESSON24} component={Lesson24} />
    <Route path={ROUTES.LESSON25} component={Lesson25} />
    <Route path={ROUTES.LESSON26} component={Lesson26} />
    <Route path={ROUTES.LESSON27} component={Lesson27} />
    <Footer />
  </Router>
);

export default withAuthentication(App);
