import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from './constants/Firebase';
import * as ROUTES from './constants/Routes';

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
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
      <form onSubmit={this.onSubmit}>
          <input
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUp;

export { SignUpForm, SignUpLink };