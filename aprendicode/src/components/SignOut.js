import React from 'react';
import { withFirebase } from '../constants/Firebase';
import signoutImg from '../assets/signout.png';
import { Link } from 'react-router-dom'

import './Header.scss';
const SignOutButton = ({ firebase }) => (
  <Link to="/" className="header-button-link">
    <div className="header-button" onClick={firebase.doSignOut}>
      <img className="header-button-img" src={signoutImg} alt="logo"></img>
      <span className="header-button-text">Desconectar</span>
    </div>
  </Link>
);

export default withFirebase(SignOutButton);