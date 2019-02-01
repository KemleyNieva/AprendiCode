import React from 'react';
import './Explore.css';
import logo from './assests/aprendiCODE.png';
import Table from 'react-bootstrap/Table';



export class Explore extends React.Component{
    render(){
        return(
            <div className="stripes">
            <div className="outline">
                <img className = "logo"src={logo}/>
                <div className="line">
                <br></br>
                <h2 className="title"><b>Explore other resources / Otros recursos</b></h2>
                    <Table striped bordered hover className="table">
                        <thead>
                            <tr>
                            <th>Name / Nombre</th>
                            <th>Link</th>
                            <th>About / Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Code Monkey</td>
                            <td>https://www.playcodemonkey.com/</td>
                            <td>Online game in ENGLISH ONLY for children to learn to code in a easy manner.</td>
                            </tr>
                            <tr>
                            <td>Scratch</td>
                            <td>https://scratch.mit.edu/</td>
                            <td>A  Downloadable video game avaliable in spanish for children. 
                                <br></br>
                                Un program de computador de ninos,desponeble in espanol.</td>
                            </tr>
                            <tr>
                            <td>Tynker</td>
                            <td>https://www.tynker.com/</td>
                            <td>A interactive video game for children with lesson plans. 
                                <br></br>
                                Un videojuego interactivo para niños con planes de lecciones.   
                            </td>
                            </tr>
                        </tbody>
                        </Table>
                </div>
            </div>
            </div>
        );
    }
}