import React from "react";
import Button from '@material/react-button';
import './Header.scss';

import { Link } from 'react-router-dom'

import logo from '../assets/aprendiCODEWhite.png';
import learnImg from '../assets/learn.png';
import exploreImg from '../assets/explore.png';
import aboutImg from '../assets/about.png';
import signinImg from '../assets/signin.png';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/"><img className="header-logo" src={logo} alt="logo"></img></Link>
                <div className="header-space"></div>
                <div className="header-buttons">
                    <Link to="/learn" className="header-button-link"><Button className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={learnImg} alt="logo"></img>
                        <span className="header-button-text">Learn</span>
                    </Button></Link>
                    <Link to="/explore" className="header-button-link"><Button className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={exploreImg} alt="logo"></img>
                        <span className="header-button-text">Explore</span>
                    </Button></Link>
                    <Link to="/about" className="header-button-link"><Button className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={aboutImg} alt="logo"></img>
                        <span className="header-button-text">About</span>
                    </Button></Link>
                    <Link to="/signin" className="header-button-link"><Button className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={signinImg} alt="logo"></img>
                        <span className="header-button-text">Sign In</span>
                    </Button></Link>
                </div>
            </div>
        );
    }
}