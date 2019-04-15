import React from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from './Firebase';
import * as ROUTES from '../constants/Routes';
import AuthUserContext from './SessionContext';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
              authUser => {
                if (!condition(authUser)) {
                  this.props.history.push(ROUTES.LOGIN);
                }
              }
            );
          }
  
      componentWillUnmount() {
        this.listener();
      }
  
      render() {
        return (
            <AuthUserContext.Consumer>
            {authUser =>
              condition(authUser) ? <Component {...this.props} /> : null
            }
          </AuthUserContext.Consumer>
        );
      }
    }
  
    return withRouter(withFirebase(withAuthorization));
  };
  
  export default withAuthorization;