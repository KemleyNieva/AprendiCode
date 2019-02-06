import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory} from "react-router"; 

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Explore } from "./components/Explore";
import { Learn } from "./components/Learn";
import { Login } from "./components/Login";
import { Start } from "./components/Start";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"/"} component={Home}/>
          <Route path={"about"} component={About}/>
          <Route path={"explore"} component = {Explore}/>
          <Route path={"learn"} component = {Learn}/>
          <Route path={"start"} component = {Start}/>
          <Route path={"login"} component={Login}/>
      </Router>
    );
  }
}

export default App;
