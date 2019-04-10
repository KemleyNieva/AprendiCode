import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../constants/Session';
import { withFirebase } from '../constants/Firebase';

import './Home.scss';
import logoColor from '../assets/aprendiCODEColor.png';


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
      const usersList = Object.keys(usersObj).map(key => ({
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
    this.props.firebase.users().off();
  }

  render() {
    const { usersList } = this.state.users;
    return (
      <div className="home">
        <div className="middle">
          <div className="vamosAJugar">
            <span className="vamosAJugar-title">¡VAMOS A JUGAR!</span>
            <div className="vamosAJugar-buttons">
              <AuthUserContext.Consumer>
                {authUser =>
                  authUser ? <VamosAJugarAuth /> : <VamosAJugarNonAuth />
                }
              </AuthUserContext.Consumer>
            </div>
          </div>
        </div>
        <div className="bienvenido">
          <span className="bienvenido-title">BIENVENIDO A <img className="bienvenido-logo" src={logoColor} alt="logo"></img></span>
          <p className="bienvenido-p">Este programa es para niños hispanohablantes que quieren aprendan a codificar con una experiencia interactiva.
              Hecho para niños de 8-12 años.</p>
        </div>
      </div>
      //     <div>
      //     <AuthUserContext.Consumer>
      //     {authUser => 
      //       authUser? <HomeAuth/> : <HomeNonAuth/>
      //     }
      //     </AuthUserContext.Consumer>
      //     <div>
      //     {this.state.users.map(user => (
      //     <li key={user.uid}>
      //       <span>
      //         <strong>name:</strong> {user.name}
      //       </span>
      //       <span>
      //         <strong>Username:</strong> {user.username}
      //       </span>
      //     </li>
      //   ))}
      //     </div>
      // </div>
    );
  }
}

const VamosAJugarAuth = () => (
  <div className="start-buttons">
    <Link to="/start" className="start-button-link"><div className="vamosAJugar-button empieza">Empieza</div></Link>
  </div>
);

const VamosAJugarNonAuth = () => (
  <div className="start-buttons">
    <Link to="/signup" className="start-button-link"><div className="vamosAJugar-button registrate">Regístrate</div></Link>
    <Link to="/login" className="start-button-link"><div className="vamosAJugar-button iniciar">Iniciar</div></Link>
  </div>
);


export default withFirebase(Home);