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
                    <span className="footer-title">Contact Us</span>
                    <p>For more information, contact us at aprendiCODE@gmail.com</p>
                </div>
                <div className="footer-about">
                    <span className="footer-title">About</span>
                    <p>This is our senior project</p>
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