import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson11 extends React.Component {
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
                                <h3 className="lesson-info-title">Lección 1-1</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p>Empecemos presentándonos. Para hablar con la computadora y ver lo que dice, debe imprimir or print. Piense en print como imprimir algo en la pantalla.</p>
                                    <p>Si queremos decir "Hola mundo", tenemos que escribir: print "¡Hola mundo!"</p>
                                    <p>Lo que queremos decir debe estar entre comillas para que la computadora pueda diferenciar la frase de la acción.</p>
                                    <p>Ahora salode a el equipo.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Cambia la informacion entre las comillas pa que sea Hola equipo.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                </code>
                                <code data-type="sample-code">
                                print (' ')
                            
                                </code>
                                <code data-type="solution">
                                print ('Hola equipo')
                                
                                </code>
                                <code data-type="sct">
                                test_function("print") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint"> Ponga la information entre las comillas (<code>""</code>). Ten quidado con los espasos y capitalización.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

