
import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson16 extends React.Component {
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
                                <Link to="/lesson16" className="lessons-link selected"><div className="sublesson" onClick={this.reloadDataCamp}>Actualizar Variables</div></Link>
                                <Link to="/lesson17" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 1-6</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>A veces los datos cambian a medida que avanza. Puedes actualizar los datos simplemente reinicializar. Por ejemplo, si queremos  tener nombre_de_entrenador = Fernando, pero el entrenador cambia, podemos cambiarlo a nombre_de_entrenador = David y se actualizará.</p>
                                    <p>Digamos que necesitas calcular el marcador de goles  del equipo después de un nuevo gol. Tenemos cuenta = 2 y un gol = 1, puede escribir cuenta + = goal. Lo que hace es el marcador actual más el nuevo gol para el total de el puntaje que es 2 + 1 = 3.</p>
                                    <p>Ahora escribe el nombre de el mejor jugador de fútbol en el variable, mejor_jugador. </p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Ahora cambie el nombre para que sea Messi, hágalo en una línea nueva después de la línea de mejor_jugador.  </li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                mejor_jugador = "Ronaldo" <br></br> 
                                #Escribe aqui<br></br><br></br>
                                print("El mejor jugador es " + mejor_jugador)
                                </code>
                                <code data-type="solution">
                                mejor_jugador = "Ronaldo" <br></br> 
                                mejor_jugador = "Messi"<br></br>
                                print("El mejor jugador es " + mejor_jugador)
                                </code>
                                <code data-type="sct">
                                test_object("mejor_jugador")<br></br>
                                test_function("print")<br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Escribe una linea nueva que asigna Messi a el mejor jugador.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


