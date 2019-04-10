import React from "react";
import { Link } from 'react-router-dom';

import './Start.scss';



export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.reloadDataCamp = this.reloadDataCamp.bind(this);
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
            <div className="home">
                <div className="start">
                    <div className="start-cards">
                        <div className="start-card selected card1" id="a">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Link to="/lesson11" className="header-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}>Iniciar</div></Link></div>
                        </div>
                        <div className="start-card card2">
                            <span className="start-card-title">Partido 2: Strings</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Link to="/lesson21" className="header-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}>Iniciar</div></Link></div>
                        </div>
                        <div className="start-card card3">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card4">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card5">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card6">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                    </div>
                </div>
            </div>
        );
    }
}