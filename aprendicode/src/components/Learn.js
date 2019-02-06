import React from 'react';
import './Learn.css';
import logo from './assests/aprendiCODE.png';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

    
export class Learn extends React.Component{
    render(){
        return(
            <div className="stripes">
            <div className="outline">
                <img className = "logo"src={logo}/>
                <div className="line">
                <br></br>
                <h2 className="title"><b> Aprende más sobre nuestros lecciones / 
                    <br></br> Learn more about our lesson plans </b></h2>

                <br></br>
                <br></br>
                <Carousel>
                    <Carousel.Item>
                    <Card className ="greenbox">
                        <Card.Body>
                        <Card.Title className ="subtitle">Introduction</Card.Title>
                        <Card.Text>
                            Something about an introduction
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className ="greenbox">
                        <Card.Body>
                        <Card.Title className ="subtitle">For loops</Card.Title>
                        <Card.Text>
                            To fill in later 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className ="greenbox">
                        <Card.Body>
                        <Card.Title className ="subtitle">Functions</Card.Title>
                        <Card.Text>
                            Something about Functions
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            </div>
        );
    }                    
}
    