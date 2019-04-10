import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { withFirebase } from '../constants/Firebase';
import * as ROUTES from '../constants/Routes';

import './Login.scss';
import logoColor from '../assets/aprendiCODEColor.png';

const SignInPage = () => (
  <div>
   <SignInForm/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    console.log(this.state);
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="Login">
        <div className="middleLogin">
          <div className="vamosAJugarLogin">
            <div className="loginBox">
          <span className="login-title"><img className="login-logo" src={logoColor} alt="logo"></img></span>
          </div>
          <form onSubmit={this.onSubmit}>
        <input
          id ="emailBox"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <p></p>
        <input
          id= "emailBox"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <p></p>
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}

        <SignUpLink />
      </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };