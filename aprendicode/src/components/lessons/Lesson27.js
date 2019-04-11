import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson27 extends React.Component {
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
                                <Link to="/lesson21" className="lessons-link selected"><div className="sublesson selected" onClick={this.reloadDataCamp}>Mayúscula y Minúscula</div></Link>
                                <Link to="/lesson22" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>EmpiezaCon y TerminaCon</div></Link>
                                <Link to="/lesson23" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Largo</div></Link>
                                <Link to="/lesson24" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Index</div></Link>
                                <Link to="/lesson25" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Posición</div></Link>
                                <Link to="/lesson26" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Cuenta</div></Link>
                                <Link to="/lesson27" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 2-7</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Tu camiseta se ve muy bien! ¡Complete algunas de estas preguntas para enviar el formulario! Todas estas preguntas pueden ser respondidas con un comando.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Escribe el nombre, Anthony, como un variable, nombre.</li>
                                    <li>Que largo es el nombre? </li>
                                    <li>¿Qué letra está a la mitad de el nombre?</li>
                                    <li>Muestra si el nombre termina con una s.</li>
                                    <li>Muestra el nombre en mayúscula.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                #Cada numero en una linea nueva y Aja print para todos
                            
                                </code>
                                <code data-type="solution">

                                nombre="Anthony"<br></br>
                                print(len(nombre))<br></br>
                                print(nombre[2])<br></br>
                                print(nombre.endswith('s'))<br></br>
                                print(nombre.upper())<br></br>
                                
                                </code>
                                <code data-type="sct">
                                test_object("nombre") <br></br>
                                test_function("print") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint"> Todos tiene que ser en una linea nueva con <code>print()</code> .</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

