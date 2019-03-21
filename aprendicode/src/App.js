import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import * as ROUTES from './constants/Routes';
import { Link } from 'react-router-dom';
import {withFirebase} from './constants/Firebase';
import {withAuthentication } from './constants/Session';

const App = () => (
  <Router>
  <div>
    
  <hr />

    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.LOGIN} component={Login} />
    <Route path = {ROUTES.SIGNUP} component={SignUp}/>
    </div> 
  </Router>
); 

export default withAuthentication(App);
