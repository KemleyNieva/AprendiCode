import React from "react";

import './Lesson.scss';

class Lesson extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selected: 0,
          learn1: "Empecemos presentándonos. Para hablar con la computadora y ver lo que dice, debe imprimir or print. Piense en print como imprimir algo en la pantalla.",
          learn2: "Si queremos decir 'Hola mundo', tenemos que escribir: print '¡Hola mundo!'",
          learn3: "Lo que queremos decir debe estar entre comillas para que la computadora pueda diferenciar la frase de la acción.",
          learn4: "Ahora preséntate al equipo.",
          learn5: "null",
          learn6: "null",
          learn7: "null",
          learn8: "null",
          learn9: "null",
          learn10: "null",
          sampleCode: "print ('Hello my name is TU NOMBRE.')",
        };

        this.changeLearn = this.changeLearn.bind(this);
    }

    changeLearn(e) {
        this.changeCode(e);
        e.target.parentNode.childNodes[this.state.selected].classList.remove("selected");
        switch(e.target.id) {
            case "1":
            this.setState({
                selected: 0,
                learn1: "Empecemos presentándonos. Para hablar con la computadora y ver lo que dice, debe imprimir or print. Piense en print como imprimir algo en la pantalla.",
                learn2: "Si queremos decir 'Hola mundo', tenemos que escribir: print '¡Hola mundo!'",
                learn3: "Lo que queremos decir debe estar entre comillas para que la computadora pueda diferenciar la frase de la acción.",
                learn4: "Ahora preséntate al equipo.",
                learn5: "null",
                learn6: "null",
                learn7: "null",
                learn8: "null",
                learn9: "null",
                learn10: "null",
            });
            e.target.classList.add("selected");
              break;
            case "2":
            this.setState({
                selected: 1,
                learn1: "Es normal cometer errores. Cuando cometas un falta, la computadora le devolverá un error. Los errores de puntuación que la computadora no puede entender qué acción está intentando realizar entonces es un error de sintaxis. Por lo tanto, es importante mantener la puntuación correcta.",
                learn2: "Ejecutas el programa que está incorrecto para ver el error: print Hola, equipo!",
                learn3: "Ahora, arregles el programa.",
                learn4: "null",
                learn5: "null",
                learn6: "null",
                learn7: "null",
                learn8: "null",
                learn9: "null",
                learn10: "null",
            });
            e.target.classList.add("selected");
              break;
            default:
              console.log('default');
          }
    }

    changeCode() {
        debugger;
        this.setState({
            sampleCode: "print ('test')",
        });
        window.initAddedDCLightExercises();
    }

    render() {
        return (
            <div className="home">
                <div className="lesson">
                    <div className="lesson boxes">
                        <div className="lesson-box top">
                            <div className="lesson-sublessons">
                                <div className="sublesson selected" id="1" onClick={this.changeLearn}>¡Hola Mundo!</div>
                                <div className="sublesson" id="2" onClick={this.changeLearn}>Declaraciones de error</div>
                                <div className="sublesson" id="3" onClick={this.changeLearn}>Variables</div>
                                <div className="sublesson" id="4" onClick={this.changeLearn}>Matemáticas</div>
                                <div className="sublesson" id="5" onClick={this.changeLearn}>Actualizar Variables</div>
                                <div className="sublesson" id="6" onClick={this.changeLearn}>Comentarios</div>
                                <div className="sublesson" id="7" onClick={this.changeLearn}>Todo junto</div>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-info-title">LEARN</h3>
                                <div id="lesson-info-data">
                                <div className="lesson-info-text">
                                    <Lessonlearn learn1={this.state.learn1}
                                    learn2={this.state.learn2}
                                    learn3={this.state.learn3}
                                    learn4={this.state.learn4}
                                    learn5={this.state.learn5}
                                    learn6={this.state.learn6}
                                    learn7={this.state.learn7}
                                    learn8={this.state.learn8}
                                    learn9={this.state.learn9}
                                    learn10={this.state.learn10}></Lessonlearn>
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
                                <SampleCode text={this.state.sampleCode}></SampleCode>
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

class Lessonlearn extends React.Component {
    render() {
      return <div>
          {this.props.learn1 != "null" ? <p>{this.props.learn1}</p> : null}
          {this.props.learn2 != "null" ? <p>{this.props.learn2}</p> : null}
          {this.props.learn3 != "null" ? <p>{this.props.learn3}</p> : null}
          {this.props.learn4 != "null" ? <p>{this.props.learn4}</p> : null}
          {this.props.learn5 != "null" ? <p>{this.props.learn5}</p> : null}
          {this.props.learn6 != "null" ? <p>{this.props.learn6}</p> : null}
          {this.props.learn7 != "null" ? <p>{this.props.learn7}</p> : null}
          {this.props.learn8 != "null" ? <p>{this.props.learn8}</p> : null}
          {this.props.learn9 != "null" ? <p>{this.props.learn9}</p> : null}
          {this.props.learn10 != "null" ? <p>{this.props.learn10}</p> : null}
            </div>;
    }
  }


class SampleCode extends React.Component {
    render() {
      return <div>
          {this.props.text}
          </div>;
    }
  }

export default Lesson;
