import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson22 extends React.Component {
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
                                <Link to="/lesson21" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Mayúscula y Minúscula</div></Link>
                                <Link to="/lesson22" className="lessons-link selected"><div className="sublesson selected" onClick={this.reloadDataCamp}>EmpiezaCon y TerminaCon</div></Link>
                                <Link to="/lesson23" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Largo</div></Link>
                                <Link to="/lesson24" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Index</div></Link>
                                <Link to="/lesson25" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Posición</div></Link>
                                <Link to="/lesson26" className="lessons-link"><div className="sublesson" onClick={this.reloadDataCamp}>Cuenta</div></Link>
                                <Link to="/lesson27" className="lessons-link last-sublesson"><div className="sublesson" onClick={this.reloadDataCamp}>Todo junto</div></Link>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">Lección 2-2</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>También podemos encontrar información de un estring. Digamos que necesita saber si alguien más tiene el mismo nombre que usted en el equipo que puede ejecutar.</p>
                                    <p>Esto comprobará si el nombre del primer jugador comienza con las mismas letras que el tuyo y si el jugador 2 termina con el mismo nombre que el tuyo</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Cheque se el nombre de jugador uno termina en una y</li>
                                    <li>Cheque se el nombre de jugador uno comienza en una s</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                nombre_de_jugador1 = "jose" <br></br>
                                nombre_de_jugador2 = "sofia" <br></br>
                                print(nombre_de_jugador1.endswith(''))<br></br>
                                print(nombre_de_jugador2.startswith(''))<br></br>
                                
                            
                                </code>
                                <code data-type="solution">

                                nombre_de_jugador1 = "jose" <br></br>
                                nombre_de_jugador2 = "sofia" <br></br>
                                print(nombre_de_jugador1.endswith('y'))<br></br>
                                print(nombre_de_jugador2.startswith('s'))<br></br>
                                
                                
                                </code>
                                <code data-type="sct">
                                test_object("nombre_de_jugador1") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Ponga y entre <code>""</code> en la primera linea and s en la seguna.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

