import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson21 extends React.Component {
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
                                <h3 className="lesson-info-title">Lección 2-1</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Digamos que el entrenador pidió escribir su nombre en mayúsculas para la Jersey. </p>
                                    <p>El mando upper() (upper es alto en ingles) escribe el nombre en mayusculas.</p>
                                    <p>Es importante tener el punto en el nombre de el estring en las acciones, así la computadora entenderá lo que está tratando de escribir en mayúsculas o minúsculas.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Ejecute nombre.upper () Vea lo que pasa. No ponga attention de el error por ahora.</li>
                                    <li>Ahora aja nombre.lower() que es bajo in ingles.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                nombre = "Sabrina" <br></br>
                                print(nombre.upper())
                            
                                </code>
                                <code data-type="solution">

                                nombre = "Sabrina" <br></br>
                                print(nombre.lower())
                                
                                </code>
                                <code data-type="sct">
                                test_function("print") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Cambie upper a lower y mainte el <code>()</code> y la <code>.</code>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

