import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson13 extends React.Component {
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
                                <Link to="/lesson13" className="lessons-link selected"><div className="sublesson" onClick={this.reloadDataCamp}>Comentarios</div></Link>
                                <Link to="/lesson14" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Variables</div></Link>
                                <Link to="/lesson15" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Matemáticas</div></Link>
                                <Link to="/lesson16" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Actualizar Variables</div></Link>
                                <Link to="/lesson17" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 1-3</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Cuando se comparte el código entre los miembros del equipo, a veces es necesario explicar lo qué está pasando. Python le permite agregar comentarios que serán ignorados por la computadora al poner el # antes de la oración.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Escriba un comentario lo que está pasando en el código a continuación.(#por la targeta roja un judador se fue) </li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                tarjeta_roja = "Si" <br></br><br></br>
                                #Num_de_jugadors - 1 <br></br>

                            
                                </code>
                                <code data-type="solution">

                                tarjeta_roja = "Si" <br></br>
                                #por la targeta roja un judador se fue <br></br>
                                #num_de_jugadors - 1 
                                
                                </code>
                                <code data-type="sct">
                                test_object("tarjeta_roja") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Escribe una linea nueva con el symbol <code>#</code> adelante.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
