import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson15 extends React.Component {
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
                <div className="lesson">
                    <div className="lesson boxes">
                        <div className="lesson-box top">
                            <div className="lesson-sublessons">
                                <Link to="/lesson11" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>¡Hola Mundo!</div></Link>
                                <Link to="/lesson12" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Declaraciones de error</div></Link>
                                <Link to="/lesson13" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Comentarios</div></Link>
                                <Link to="/lesson14" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Variables</div></Link>
                                <Link to="/lesson15" className="lessons-link selected"><div className="sublesson" onClick={this.reloadDataCamp}>Matemáticas</div></Link>
                                <Link to="/lesson16" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Actualizar Variables</div></Link>
                                <Link to="/lesson17" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 1-5</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p> Al codificar, las computadoras también pueden manejar muchas de las matemáticas. Entonces, si queremos sumar la cantidad total de jugadores, podemos hacerlo y guardarlo en un variable. Digamos que tenemos 11 jugadores en el campo y 7 en el banco podemos calcular el total de jugadores haciendo total_jugadores = 11 + 7</p>
                                    <p> También puedes calcular usando otros variables. Por ejemplo, si tenemos num_de_jugadores = 11, pero necesitamos conocer a los  total_jugadores, entonces podemos ejecutar total_jugadores = num_de_jugadores + 7</p>
                                    <p>Para añadir utilizar el +. Para restar usa - . Para uso múltiple *. Para dividir usa /. La respuesta será el número entero más cercano. Si desea saber el resto al dividir debe usar el comando %. Por ejemplo, si tiene 13 cookies pero 11 jugadores y desea saber cuántas cookies quedan, usará 13% 11 y la respuesta sería 2</p>

                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Ahora calcule la cantidad de balones de fútbol necesarios si desea tener 2 balones de fútbol por jugador para entrenar</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                total_jugadores = 11 +7 <br></br>
                                num_de_balones  = <br></br>
                            
                                </code>
                                <code data-type="solution">
                                total_jugadores = 11 +7 <br></br>
                                num_de_balones  = total_jugadores * 2 <br></br>
                                
                                </code>
                                <code data-type="sct">
                                test_object("num_de_balones") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Para multiplicar se usa (<code>*</code>) .</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}