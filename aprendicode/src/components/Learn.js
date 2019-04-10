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
                                <h2 className="learn-card-bottom-h2">Estrings</h2>
                            </div>
                        </div>
                        <div className="learn-card1">
                            <p className="learn-card-text" style={{marginTop: 180 +"px"}}> Preparate para aprender de los condicionales. Vamos a aprender como codificar cuando hay mas de una option. Estos son los if statements que es como decer cuando algo pasa hago esta otra cosa.</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">Condicionales</h2>
                            </div>
                        </div>
                    </div>
                    <div className="learn-section-flex">
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Lista, Diccionarios y Matrices</h2>
                            </div>
                            <p className="learn-card-text"> En este partido vamos a hablar como hacer un diccionario, listas y matrices. Los diccionarios son como definemos differents variables. Listas y matrices nos deja ser organizados en information.</p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Vueltas</h2>
                            </div>
                            <p className="learn-card-text"> Vamos a aprender como hacer un function por certo tiempos. Las vueltas se usan para ejecutar certar linas de codigo un numbero de tiempos. Son muy importantes! </p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                                <h2 className="learn-card-top-h2">Funciones</h2>
                            </div>
                            <p className="learn-card-text"> El ultimo partido es de funciones. Vamos aprender como condicar intelligentamente y sin mucho trabajo que es importante. Las funciones son parte de programación orientada a objetos. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}