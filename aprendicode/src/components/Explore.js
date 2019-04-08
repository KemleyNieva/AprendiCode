import React from "react";
import './Explore.scss';


import codeMonkey from '../assets/codeMonkey.png';
import scratch from '../assets/scratch.png';
import tynker from '../assets/tynker.png';


export class Explore extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about-section last-section">

                    <div className="explore-cards">
                        <div className="explore-card explore-card1">
                            <div className="explore-card-box">
                                <div className="explore-card-img">
                                    <img className="explore-card-imgg" src={codeMonkey} alt="logo"></img>
                                </div>
                                <div className="explore-card-info">
                                    <h2>Code Monkey</h2>
                                    <a href="https://www.playcodemonkey.com">https://www.playcodemonkey.com</a>
                                    <p>Online game in ENGLISH ONLY for children to learn to code in a easy manner.</p>
                                </div>
                            </div>
                        </div>
                        <div className="explore-card explore-card2">
                            <div className="explore-card-box">
                                <div className="explore-card-img">
                                    <img className="explore-card-imgg" style={{marginTop: 8 +'px'}} src={scratch} alt="logo"></img>
                                </div>
                                <div className="explore-card-info">
                                    <h2>Scratch</h2>
                                    <a href="https://scratch.mit.edu">https://scratch.mit.edu</a>
                                    <p>A  Downloadable video game avaliable in spanish for children.</p>
                                </div>
                            </div>
                        </div>
                        <div className="explore-card explore-card3">
                            <div className="explore-card-box">
                                <div className="explore-card-img">
                                    <img className="explore-card-imgg" style={{marginTop: 41 +'px'}} src={tynker} alt="logo"></img>
                                </div>
                                <div className="explore-card-info">
                                    <h2>Tynker</h2>
                                    <a href="https://www.tynker.com">https://www.tynker.com</a>
                                    <p>A interactive video game for children with lesson plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <h2 className="about-section-tittle">Who We Are</h2>
                    <div className="about-section-flex">
                        <div className="card">
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
                    </div> */}
                </div>
            </div>
        );
    }
}