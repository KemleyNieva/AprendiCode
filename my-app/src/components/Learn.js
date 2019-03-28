import React from "react";
import './Learn.scss';

export class Learn extends React.Component {
    render() {
        return (
            <div className="learn">
                <div className="learn-section last-section">
                    <div className="learn-section-flex">
                        <div className="learn-card1">
                            <p className="learn-card-text" style={{marginTop: 205 +"px"}}>En esta lección, vas a ser un nuevo jugador de fútbol en el Equipo Técnico. Pasarás por una serie de lecciones para enseñarte los fundamentos y ¡conocer al equipo!</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">Fundamentos</h2>
                            </div>
                        </div>
                        <div className="learn-card1">
                            <p className="learn-card-text" style={{marginTop: 160 +"px"}}> Los estrings de tipo variable, como vimos antes, contienen principalmente palabras. Gracias al práctico lenguaje Python y al codificador anterior, los estrings vienen con una serie de comandos o acciones que pueden ayudar a facilitar la comunicación.</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">Strings</h2>
                            </div>
                        </div>
                        <div className="learn-card1">
                            <p className="learn-card-text" style={{marginTop: 180 +"px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">Condicionales</h2>
                            </div>
                        </div>
                    </div>
                    <div className="learn-section-flex">
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Arrays</h2>
                            </div>
                            <p className="learn-card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Vueltas</h2>
                            </div>
                            <p className="learn-card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Funciones</h2>
                            </div>
                            <p className="learn-card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}