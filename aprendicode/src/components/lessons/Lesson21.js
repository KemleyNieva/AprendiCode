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
                                <h3 className="lesson-info-title">LEARN - Lección 2-1</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Empecemos presentándonos. Para hablar con la computadora y ver lo que dice, debe imprimir or print. Piense en print como imprimir algo en la pantalla.</p>
                                    <p>Si queremos decir "Hola mundo", tenemos que escribir: print "¡Hola mundo!"</p>
                                    <p>Lo que queremos decir debe estar entre comillas para que la computadora pueda diferenciar la frase de la acción.</p>
                                    <p>Ahora preséntate al equipo.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCTIONS</h3>
                                <ol>
                                    <li>Cambia la informacion entre las comillas (" ") a tu nombre.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                    b = 6
                                </code>
                                <code data-type="sample-code">
                                import numpy as np <br></br>
                                import matplotlib.pyplot as plt <br></br>

                                x = np.arange(0, 5, 0.1); <br></br>
                                y = np.sin(x) <br></br>
                                plt.plot(x, y) <br></br>
                                plt.show() <br></br>
                            
                                </code>
                                <code data-type="solution">

                                a = 5 <br></br>
                                print(a)
                                
                                </code>
                                <code data-type="sct">
                                test_object("a") <br></br>
                                test_function("print") <br></br>
                                success_msg("Great job!") <br></br>
                                </code>
                                <div data-type="hint">Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

