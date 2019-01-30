import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory} from "react-router"; 

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Login } from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"/"} component={Home}/>
          <Route path={"about"} component={About}>
          </Route>
          <Route path={"login"} component={Login}/>
      </Router>
    );
  }
}

export default App;
