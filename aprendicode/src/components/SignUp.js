import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../constants/Firebase';
import * as ROUTES from '../constants/Routes';

import './SignUp.scss';
import logoColor from '../assets/aprendiCODEColor.png';

const SignUp = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    name: '',
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { name, username, email, passwordOne } = this.state;
    
        this.props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            //Create user in database so you can retrieve info later
            return this.props.firebase
            .user(authUser.user.uid)
            .set({
              username,
              name,
            });
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        name,
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className="SignUp">
      <div className="middleSignUp">
        <div className="vamosAJugarSignUp">
          <div className="signUpBox">
        <span className="signUp-title"><img className="signUp-logo" src={logoColor} alt="logo"></img></span>
        </div>
      <form onSubmit={this.onSubmit}>
          <input
          className= "emailBoxSignUp"
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Name"
        />
        <p></p>
        <input
          className = "emailBoxSignUp"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <p></p>
        <input
          className="emailBoxSignUp"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <p></p>
   
        <input
          id= "passwordFirst"
          className= "emailBoxSignUp"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
     
        <input
          id= "passwordTwo"
          className="emailBoxSignUp"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
     
    
        <button className = "SignUpButton" disabled={isInvalid} type="submit">
        <span className="SignUpButton-text">Registrate</span>
          </button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p id= "SignUpLink">
    Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUp;

export { SignUpForm, SignUpLink };