import React from "react";
import { Link } from 'react-router-dom';
import {withFirebase} from '../constants/Firebase';
import { AuthUserContext } from '../constants/Session';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import './Start.scss';



 class StartBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.reloadDataCamp = this.reloadDataCamp.bind(this);
      }

      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            if ((!authUser)) {
                this.props.history.push(ROUTES.LOGIN);
              }
        });
      }

      componentWillUnmount(){
        this.listener();
      }
    
      reloadDataCamp() {
          let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("done!"), 1000);
          }).then(function() {
            window.initAddedDCLightExercises();
          });
      }
    
    render() {
        return (
            <div> <AuthUserContext.Consumer>
            {authUser =>
              authUser ? 
              <div className="home">
                <div className="start">
                    <div className="start-continue-box">
                        <Link to="/lesson11" className="start-continue-link">
                        <div className="start-continue-button" onClick={this.reloadDataCamp}>
                            <span className="start-continue-button-text">Seguir donde lo dejé</span>
                        </div>
                        </Link>
                    </div>
                    <div className="start-cards">
                        <div className="start-card selected card1" id="a">
                            <span className="start-card-title">Partido 1: Fundamentos</span>
                            <span className="start-card-des"> Este partido se enfoca en introducer se a el equipo. Vas a aprende los fundamentos de codifar en Pyton..</span>
                            <div className="start-card-button-wrap"><Link to="/lesson11" className="start-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}><span className="start-card-button-text">Iniciar</span></div></Link></div>
                        </div>
                        <div className="start-card card2">
                            <span className="start-card-title">Partido 2: Estrings</span>
                            <span className="start-card-des"> Continamos aprendo de el tipo de variable llamdo Estrings or cuerda. Los estrings tiene mucho commandos que vamos aprender en este partido.</span>
                            <div className="start-card-button-wrap"><Link to="/lesson21" className="start-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}><span className="start-card-button-text">Iniciar</span></div></Link></div>
                        </div>
                        <div className="start-card card3">
                            <span className="start-card-title">Partido 3: Condicionales</span>
                            <span className="start-card-des"> Preparate para aprender de los condicionales. Hablos como codificar cuando hay mas de una option.</span>
                            <div className="start-card-button-wrap"><Link to="/lessonconstruction" className="start-button-link"><div className="start-card-button"><span className="start-card-button-text">Iniciar</span></div></Link></div>                        </div>
                        <div className="start-card card4">
                            <span className="start-card-title">Partido 4: Lista, Diccionarios, y Matrices</span>
                            <span className="start-card-des"> En este partido vamos a hablar como hacer un diccionario, listas y matrices.</span>
                            <div className="start-card-button-wrap"><Link to="/lessonconstruction" className="start-button-link"><div className="start-card-button"><span className="start-card-button-text">Iniciar</span></div></Link></div>                        </div>
                        <div className="start-card card5">
                            <span className="start-card-title">Partido 5: Vueltas</span>
                            <span className="start-card-des"> Vamos a aprender como hacer un function por certo tiempos.</span>
                            <div className="start-card-button-wrap"><Link to="/lessonconstruction" className="start-button-link"><div className="start-card-button"><span className="start-card-button-text">Iniciar</span></div></Link></div>                        </div>
                        <div className="start-card card6">
                            <span className="start-card-title">Partido 6: Funciones</span>
                            <span className="start-card-des"> El ultimo partido es de funciones. Vamos aprender como condicar intelligentamente y sin mucho trabajo que es importante.</span>
                            <div className="start-card-button-wrap"><Link to="/lessonconstruction" className="start-button-link"><div className="start-card-button"><span className="start-card-button-text">Iniciar</span></div></Link></div>                        </div>
                    </div>
                </div>
            </div>
              : null 
            }
          </AuthUserContext.Consumer></div>
        );
    }
}

const Start = withRouter(withFirebase(StartBase));

export {Start };


