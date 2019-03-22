import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import {AuthUserContext} from './constants/Session';

const Home = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => 
        authUser? <HomeAuth/> : <HomeNonAuth/>
      }
      </AuthUserContext.Consumer>
    
  </div>
);

const HomeAuth = () => (
  <div>
    <h1>Home Signed In</h1>
    <li><SignOutButton /></li>
  </div>
);

const HomeNonAuth = () =>(
  <div>
    <h1>Home Not Signed In</h1>
</div>

);
export default Home;