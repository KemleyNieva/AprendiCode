import React from "react";
import './Footer.scss';

import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-contact">
                    <span className="footer-title">Contáctenos</span>
                    <p>Para mas information, mandanos un correo a aprendiCODE@gmail.com</p>
                </div>
                <div className="footer-about">
                    <span className="footer-title">Que es aprendiCode</span>
                    <p> Un programa de codificar para niños que hablan español. </p>
                </div>
                <div className="footer-spacer"></div>
                <div className="footer-social">
                    <img className="footer-logo" src={insta} alt="insta logo"></img>
                    <img className="footer-logo" src={twitter} alt="twitter logo"></img>
                    <img className="footer-logo" src={fb} alt="fb logo"></img>
                </div>
            </div>
        );
    }
}