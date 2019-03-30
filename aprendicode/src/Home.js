import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import {AuthUserContext} from './constants/Session';
import { withFirebase } from './constants/Firebase';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObj = snapshot.val();
      const usersList = Object.keys(usersObj).map(key =>({
        ...usersObj[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users.off();
  }

  render() {
    const {usersList} = this.state.users;
    return (
      <div>
      <AuthUserContext.Consumer>
      {authUser => 
        authUser? <HomeAuth/> : <HomeNonAuth/>
      }
      </AuthUserContext.Consumer>
      <div>
      {this.state.users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>name:</strong> {user.name}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
      </div>
  </div>
    );
  }
}

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


export default withFirebase(Home);