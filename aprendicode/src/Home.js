import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';

const Home = () => (
  <div>
    <h1>Home</h1>
    <li><SignOutButton /></li>
  </div>
);

export default Home;