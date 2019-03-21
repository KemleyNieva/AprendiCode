import React from "react";
import Button from '@material/react-button';

import './Start.scss';



export class Start extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="start">
                    <div className="start-cards">
                        <div className="start-card selected card1" id="a">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>
                        </div>
                        <div className="start-card card2">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>
                        </div>
                        <div className="start-card card3">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>                        </div>
                        <div className="start-card card4">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>                        </div>
                        <div className="start-card card5">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>                        </div>
                        <div className="start-card card6">
                            <span className="start-card-title">Partido 1: For Loops</span>
                            <span className="start-card-des"> Preparate para aprender sobre no se que y no se como!
                                Esta tema es muy importante para saber para continuar.</span>
                            <div className="start-card-button-wrap"><Button className="start-card-button">Iniciar</Button></div>                        </div>
                    </div>
                </div>
            </div>
        );
    }
}