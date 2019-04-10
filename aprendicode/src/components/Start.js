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
                            <span className="start-card-title">Partido 1: Fundamentos</span>
                            <span className="start-card-des"> Este partido se enfoca en introducer se a el equipo. Vas a aprende los fundamentos de codifar en Pyton..</span>
                            <div className="start-card-button-wrap"><Link to="/lesson11" className="header-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}>Iniciar</div></Link></div>
                        </div>
                        <div className="start-card card2">
                            <span className="start-card-title">Partido 2: Estrings</span>
                            <span className="start-card-des"> Continamos aprendo de el tipo de variable llamdo Estrings or cuerda. Los estrings tiene mucho commandos que vamos aprender en este partido.</span>
                            <div className="start-card-button-wrap"><Link to="/lesson21" className="header-button-link"><div className="start-card-button" onClick={this.reloadDataCamp}>Iniciar</div></Link></div>
                        </div>
                        <div className="start-card card3">
                            <span className="start-card-title">Partido 3: Condicionales</span>
                            <span className="start-card-des"> Preparate para aprender de los condicionales. Hablos como codificar cuando hay mas de una option.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card4">
                            <span className="start-card-title">Partido 4: Lista, Diccionarios, y Matrices</span>
                            <span className="start-card-des"> Como en el español, el mundo de condicar tambien tiene diccionarios. Pero en este partido vamos a hablar como hacer un diccionario, listas y matrices</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card5">
                            <span className="start-card-title">Partido 5: Vueltas</span>
                            <span className="start-card-des"> Vamos a aprender como hacer un function por certo tiempos .</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                        <div className="start-card card6">
                            <span className="start-card-title">Partido 6: Funciones</span>
                            <span className="start-card-des"> El ultimo partido es de funciones. Vamos aprender como condicar intelligentamente y sin mucho trabajo que es importante.</span>
                            <div className="start-card-button-wrap"><div className="start-card-button">Iniciar</div></div>                        </div>
                    </div>
                </div>
            </div>
        );
    }
}