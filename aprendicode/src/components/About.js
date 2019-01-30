import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Kemley from './assests/Kemley.jpeg';
import Sabrina from './assests/Sabrina.jpg';
import Esteban from './assests/Esteban.png';
import chart from "./assests/chart.png";
import logo from './assests/aprendiCODE.png';
import ball from './assests/ball.png';
import book from './assests/book.png';

export class About extends React.Component{
    render(){
        return(
            <div className="stripes">
            <div className="outline">
                <img className = "logo"src={logo}/>
                
                <div className="line">
                <br></br>
                <h2 className="title"><b>Who we are / Quien Somos</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top" className = "bit"src={Kemley} />
                        <Card.Body>
                        <Card.Title className ="subtitle">Kemley Nieva</Card.Title>
                        <Card.Text>
                            "I was born in New York, but raised in Miami,FL. My family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Busniess Administration. 
                            After gradution, I will be moving to Seattle to join full-time with Microsoft as a Project Manager."
                            <br></br>
                            <br></br>
                            "Nací en Nueva York, pero crecí en Miami, FL. Mi familia es de Colombia.
                            Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en Administración de Empresas.
                            Después de graduarme, me mudaré a Seattle para trabajar con Microsoft como Project Manager.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top" className = "bit" src={Esteban} />
                        <Card.Body>
                        <Card.Title className ="subtitle" >Esteban Gonzalez</Card.Title>
                        <Card.Text>
                            "I was raised in Miami,FL. My family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Digital Arts and Sciences. 
                            After gradution, I will be moving to San Francisco to join full-time with Google as a Software Engineer."
                            <br></br>
                            <br></br>
                            "Nací en Miami, FL pero mi familia es de Colombia.
                            Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en 
                            artes y ciencias digitales.
                            Después de graduarme, me mudaré a San Francisco para trabajar con Google como 
                            ingeniero de software.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top"  className = "bit"src={Sabrina}/>
                        <Card.Body>
                        <Card.Title className ="subtitle">Sabrina Vega</Card.Title>
                        <Card.Text>
                            "I was raised in Gainesville, FL,  but my family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Digital Arts and Sciences. 
                            After gradution this semester, I will be moving to Seattle to join full-time with Microsoft as a Software Engineer."
                            <br></br>
                            <br></br>
                            "Nací en Gainesville, FL pero mi familia es de Colombia.
                            Yo voy a la Universidad de Florida estoy en mi cuarto año estudanido Ciencias de la Computación con una especialización menor en 
                            artes y ciencias digitales.
                            Después de graduarme, me mudaré a Seattle para trabajar con Microsoft como 
                            ingeniero de software."
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                </div>
                <br></br>
                <h2 className="title"><b>What we do / Que hacemos</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top" className = "ball"  src = {ball}/>
                        <Card.Body>
                        <Card.Title className ="subtitle">Fun and Education</Card.Title>
                        <Card.Text>
                            It doesn't need to be proven science to know that children love to play. 
                            That sense of playful is no different for children in other places. 
                            Therefore, in our mission to spread STEM to children all over, we knew that beyond all our product had to be fun. 
                            By feeling that they are playing in an intense soccer game, children will continue to learn coding esstientals to win the game.
                            More about the basics and the game can be found on the learn page.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top" className = "book" src = {book} />
                        <Card.Body>
                        <Card.Title className ="subtitle" >Diversión y Educación</Card.Title>
                        <Card.Text>
                            Es obvio que los niños les encanta jugar.
                            Esa sensación de juego no es diferente para los niños de otros lugares.
                            Por lo tanto, en nuestra misión de enseñar STEM a los niños de todo el mundo, sabíamos que sobre todo nuestro producto tenía que ser divertido.
                            Al sentir que están jugando un partido de fútbol, los niños continuarán aprendiendo técnicas de codificación para ganar.
                            Mas sobre las tecnicas y el juego se puede encontrad en la pagia de learn.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </CardDeck>

                <div className ="line">
                <br></br>
                <h2 className="title"><b>Why we do it / Porque lo hacemos</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top" className = "chart" src ={chart} />
                        <Card.Text className ="subtext"> <i>Image proved by  US Equal Employment Opportunity Commission (EEOC).</i></Card.Text>
                        <Card.Body>
                        <Card.Text>
                            In the world of technology, there is s huge underrepresentation of hispanics. 
                            Actually only 14% of the workforce in the United State is Hispanic even though Hispanics are the second largest ethics group in the US. 
                            After discussing this amongst ourselves, we all realized that despite being born in the US, our first language was Spanish and for the majority of our youth that was our strongest langauge.
                            However, all of coding is done in English. 
                            This lack of easy transfer of ideas makes it very hard for children at a young age to be introduced to technology and coding. 
                            By providing, a fun and educational game, we hope to incentive young Spanish speaking children to code. 
                            <br></br>
                            <br></br>
                            En el mundo de la tecnología, hay una gran subrepresentación de los hispanos.
                            En realidad, solo el 14% de la fuerza laboral en los Estados Unidos es hispana, aunque los hispanos son el segundo grupo de ética más grande en los Estados Unidos.
                            Después de discutir esto entre nosotros, todos nos dimos cuenta de que a pesar de haber nacido en los EE. UU., nuestro primer idioma era el español y para la mayoría de nuestros nines, era nuestro idioma prefedido.
                            Sin embargo, toda la codificación se en inglés.
                            Esta falta de educacion hace que sea muy difícil para los niños que hablen el espanol ser introducidos a la tecnología y la codificación.
                            Por ese hicemos, un juego divertido y educativo, esperado incentivar a los niños jóvenes a codificar.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </CardDeck>
                </div>
            </div>
            </div>
        );
    }
}