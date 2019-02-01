import React from 'react';
import './Learn.css';
import logo from './assests/aprendiCODE.png';



export class Learn extends React.Component{
    render(){
        return(
            <div className="stripes">
            <div className="outline">
                <img className = "logo"src={logo}/>
                <div className="line">
                <br></br>
                <h2 className="title"><b>Lesson Plans /  Planes de Lecciones</b></h2>
                
                    
                </div>
            </div>
            </div>
        );
    }
}