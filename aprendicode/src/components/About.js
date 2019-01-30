import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import me from './me.jpg';
import logo from './aprendiCODE.png';

export class About extends React.Component{
    render(){
        return(
            <div className="stripes">
            <div className="outline">
                <img className = "logo"src={logo}/>
                
                <h2 className="title"><b>Who we are</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top" src={me} />
                        <Card.Body>
                        <Card.Title className ="subtitle">Kemley Nieva</Card.Title>
                        <Card.Text>
                            "I was born in New York, but raised in Miami,FL. My family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Busniess Administration. 
                            After gradution, I will be moving to Seattle to join full-time with Microsoft as a Project Manager."
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top"  />
                        <Card.Body>
                        <Card.Title className ="subtitle" >Esteban Gonzalez</Card.Title>
                        <Card.Text>
                        "I was raised in Miami,FL. My family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Digital Arts and Sciences. 
                            After gradution, I will be moving to San Francisco to join full-time with Google as a Software Engineer."
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top" />
                        <Card.Body>
                        <Card.Title className ="subtitle">Sabrina Vega</Card.Title>
                        <Card.Text>
                        "I was raised in Gainesville,FL . My family is from Colombia. 
                            Currently, I attend the University of Florida as a fourth year Computer Science student with a minor in Digital Arts and Sciences. 
                            After gradution, I will be moving to Seattle to join full-time with Microsoft as a Software Engineer."
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <h2 className="title"><b>What we do</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top" />
                        <Card.Body>
                        <Card.Title className ="subtitle">Fun</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className ="greenbox">
                        <Card.Img variant="top"  />
                        <Card.Body>
                        <Card.Title className ="subtitle" >Education</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </CardDeck>

                <h2 className="title"><b>Why we do it</b></h2>
                <CardDeck className ="deck">
                    <Card className ="greenbox">
                        <Card.Img variant="top"  />
                        <Card.Body>
                        <Card.Title className ="subtitle">Kemley Nieva</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </CardDeck>
            </div>
            </div>
        );
    }
}