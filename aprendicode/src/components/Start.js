import React from 'react';
import './Start.css';
import background from './assests/background.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';


export class Start extends React.Component{
    render(){
        return(
                <div className="back" >
                <br></br>
                <h2 className="title"><b> START </b></h2>
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
                        <Button className="start">Start</Button>
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
                        <Button className="start">Start</Button>
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
                        <Button className="start">Start</Button>
                        </Card.Body>
                    </Card>
                    <br></br>
                    </Carousel.Item>
                </Carousel>
                </div>
        );
    }                    
}
    