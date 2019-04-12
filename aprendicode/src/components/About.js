import React from "react";
import './About.scss';

import Kemley from '../assets/Kemley.jpeg';
import Sabrina from '../assets/Sabrina.jpg';
import Esteban from '../assets/Esteban.png';
import chart from "../assets/chart.png";
import ball from '../assets/ball.png';
import book from '../assets/about.png';

export class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about-section">
                    <h2 className="about-section-tittle">¿Quien somos?</h2>
                    <div className="about-section-flex">
                        <div className="card">
                            <img className="card-img" src={Kemley} alt="img"/>
                            <span className="card-title">Kemley Nieva</span>
                            <p className="card-text"> 
                                Nací en Nueva York, pero crecí en Miami, FL. Mi familia es de Colombia.
                                Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en Administración de Empresas.
                                        Después de graduarme, me mudaré a Seattle para trabajar con Microsoft como Project Manager.</p>
                        </div>
                        <div className="card">
                            <img className="card-img" src={Esteban} alt="img"/>
                            <span className="card-title">Esteban Gonzalez</span>
                            <p className="card-text"> 
                                Nací en Miami, FL pero mi familia es de Colombia.
                                Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en
                                artes y ciencias digitales.
                                Después de graduarme, me mudaré a San Francisco para trabajar con Google como
                                        ingeniero de software.</p>
                        </div>
                        <div className="card">
                            <img className="card-img" src={Sabrina} alt="img"/>
                            <span className="card-title">Sabrina Vega</span>
                            <p className="card-text"> 
                                Nací en Gainesville, FL pero mi familia es de Colombia.
                                Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en
                                artes y ciencias digitales.
                                Después de graduarme, me mudaré a Seattle para trabajar con Microsoft como
                                        ingeniera de software.</p>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <h2 className="about-section-tittle">¿Qué hacemos?</h2>
                    <div className="about-section-flex">
                        <div className="card">
                            <img className="card-img-ball" src={ball} alt="img"/>
                            <span className="card-title">DIVERSIÓN</span>
                            <p className="card-text">Es obvio que los niños les encanta jugar. Esa sensación de juego no es diferente para los niños de otros lugares. AprendiCode se enfoca a que los niños no se aborren cuando aprendi algo buen importante. Ellos se van a senter como se fuera jugando un partido de futbol </p>
                        </div>
                        <div className="card">
                            <img className="card-img-book" src={book} alt="img"/>
                            <span className="card-title">EDUCACIÓN</span>
                            <p className="card-text">  Por lo tanto, en nuestra misión de enseñar STEM a los niños de todo el mundo, sabíamos que sobre todo nuestro producto tenía que ser divertido. Al sentir que están jugando un partido de fútbol, los niños continuarán aprendiendo técnicas de codificación para ganar. </p>
                        </div>
                    </div>
                </div>
                <div className="about-section last-section">
                    <h2 className="about-section-tittle">¿Porqué lo hacemos?</h2>
                    <div className="about-section-flex">
                        <div className="card">
                            <img className="card-img-ball" src={chart} alt="img"/>
                            <p className="card-text subtittle">Image proved by  US Equal Employment Opportunity Commission (EEOC).</p>
                            <p className="card-text">
                                        En el mundo de la tecnología, hay una gran subrepresentación de los hispanos.
                                        En realidad, solo el 14% de la fuerza laboral en los Estados Unidos es hispana, aunque los hispanos son el segundo grupo de ética más grande en los Estados Unidos.
                                        Después de discutir esto entre nosotros, todos nos dimos cuenta de que a pesar de haber nacido en los EE. UU., nuestro primer idioma era el español y para la mayoría de nuestros nines, era nuestro idioma prefedido.
                                        Sin embargo, toda la codificación se en inglés.
                                        Esta falta de educacion hace que sea muy difícil para los niños que hablen el espanol ser introducidos a la tecnología y la codificación.
                                        Por ese hicemos, un juego divertido y educativo, esperado incentivar a los niños jóvenes a codificar.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}