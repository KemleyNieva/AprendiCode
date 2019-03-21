import React from 'react';
import AuthUserContext from './SessionContext';
import {withFirebase} from './Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          authUser: null,
        };
      }

      //Called when the component is being rendered, listener looks for the events
      //aka when the user status changes
      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
      }
    
      //Called when the component is not in use or stops being used so that
      //we can free up the neccessary elements and no memory leaks
      componentWillUnmount(){
        this.listener();
      }

    render() {
      return(
          <AuthUserContext.Provider value={this.state.authUser}>
            <Component {...this.props} />;
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;