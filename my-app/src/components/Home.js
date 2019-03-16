import React from "react";
import Button from '@material/react-button';

import './Home.scss';

import logoColor from '../assets/aprendiCODEColor.png';


export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="middle">
                    <div className="vamosAJugar">
                        <span className="vamosAJugar-title">¡VAMOS A JUGAR!</span>
                        <div className="vamosAJugar-buttons">
                            <Button className="vamosAJugar-button mdc-button--outlined">Regístrate</Button>
                            <Button className="vamosAJugar-button">Iniciar</Button>
                        </div>
                    </div>
                </div>
                <div className="bienvenido">
                    <span className="bienvenido-title">BIENVENIDO A <img className="bienvenido-logo" src={logoColor} alt="logo"></img></span>
                    <p className="bienvenido-p">Este programa es para niños hispanohablantes que quieren aprendan a codificar con una experiencia interactiva.
              Hecho para niños de 8-12 años.</p>
                </div>
            </div>
        );
    }
}