import React from "react";
import { Link } from 'react-router-dom';

import './Lesson.scss';

export class Lesson14 extends React.Component {
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
                                <h3 className="lesson-info-title">Lección 1-4</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <p><b>Parte 1</b></p>
                                    <p>Al igual que cuando estás entrenando, hay mucha información para manejar durante la codificación. Tenemos variables que mantendrán esa información. </p> 
                                    <p> Para asignar una variable primero necesitas un nombre. Para codificar de estilo correcto, tiene que dar un nombre que correle con los datos. Por ejemplo, si está intentando guardar su edad, un nombre apropiado sería mi_edad o edad, un nombre incorrecto sería var1.</p>
                                    <p> Una vez que tenga un nombre, debe equiparar (=) ese nombre con los datos.</p> 
                                    <p> Entonces, si desea guardar el nombre del equipo, escribiría nombre_equipo = "Equipo técnico" </p> 
                                    <p><b>Parte 2</b></p>
                                    <p> Las variables pueden contener tres diferentes tipos. Hemos estado tratando con estrings que utilizan principalmente letras. Sin embargo, las variables también pueden contener solo números, llamados integers. Por ejemplo, puede guardar el número de jugadores en el campo como num_de_jugadores = 11.</p>
                                </div>
                                </div>
                            </div>
                            <div className="lesson-intructions">
                                <h3 className="lesson-info-title">INSTRUCCIONES</h3>
                                <ol>
                                    <li>Ahora escriba un variable, nombre, para guardar el nombre de el equipo: Equipo Tecnico. (Sin la tilde.)</li>
                                    <li>Ahora escribe un variable, camiesta_num para guarder el número de tu camiseta, 19. </li>
                                </ol>
                            </div>
                        </div>
                        <div className="lesson-box bottom">
                            <div data-datacamp-exercise data-lang="python">
                                <code data-type="pre-exercise-code">
                                    # This will get executed each time the exercise gets initialized
                                </code>
                                <code data-type="sample-code">
                                #Escribe nombre <br></br><br></br>

                                #Escribe camiesta_num <br></br><br></br>

                                </code>
                                <code data-type="solution">
                                nombre = 'Equipo Tecnico' <br></br>
                                camiesta_num = 19
                                </code>
                                <code data-type="sct">
                                test_object("nombre") <br></br>
                                test_object("camiesta_num") <br></br>
                                success_msg("¡Súper!") <br></br>
                                </code>
                                <div data-type="hint"> Tiene que usar (<code>=</code>) para ser un variable. Cuando es un estring nescista <code>" "</code> pero no para los numeros.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

