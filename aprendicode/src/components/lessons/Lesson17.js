import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson17 extends React.Component {
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
                                <Link to="/lesson15" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Matemáticas</div></Link>
                                <Link to="/lesson16" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Actualizar Variables</div></Link>
                                <Link to="/lesson17" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 1-7</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>¡Felicidades! Has hecho un gran trabajo en el campo de entrenamiento para el equipo Tech. Al final de este largo día, es hora de hablar con el entrenador.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Empieza por decendo Hola.</li>
                                    <li>Ahora está preguntando qué número escogiste(19) y tu posición(portedo)! Guarda esos en dos variables llamadas número y posición.</li>
                                    <li>Bien, te dice que ahora que eres parte del equipo, tendrá que pedir más botines. Si necesita dos pares para el total de 17 jugadores en el equipo, calcule la cantidad de botines que necesita y guárdelo en num_de_botines.</li>
                                    <li>Luego comenta el color de tu camiseta debajo</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                
                                </code>
                                <code data-type="solution">

                                print("Hola")<br></br>
                                numero = 19 <br></br>
                                posicion = "portedo" <br></br>
                                num_de_botines = 17*2 <br></br>
                                #blue
                                
                                </code>
                                <code data-type="sct">
                                test_function("print") <br></br>
                                test_object("numero") <br></br>
                                test_object("posicion") <br></br>
                                test_object("num_de_botines") <br></br>
                                success_msg("¡Súper!")<br></br>
                                </code>
                                <div data-type="hint">Aja cada action en una linea nueva.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

