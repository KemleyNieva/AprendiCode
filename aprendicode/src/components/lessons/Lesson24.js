import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson24 extends React.Component {
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
                                <h3 className="lesson-info-title">Lección 2-4</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Si tiene las letras = abcdefghijk y desea ver qué número es la letra E, puede escribir letras.index (e). Index is indice en ingles </p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Ejecute el codego.</li>
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
                                letras = "abcdefghijk" <br></br>
                                print(letras.index('e'));
                            
                                </code>
                                <code data-type="solution">

        
                                
                                </code>
                                <code data-type="sct">
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint">Ejecute sin cambiar.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

