import React from "react";
import './Header.scss';
import { AuthUserContext } from '../constants/Session';
import { Link } from 'react-router-dom'
import SignOutButton from './SignOut';

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
                    <Link to="/learn" className="header-button-link"><div className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={learnImg} alt="logo"></img>
                        <span className="header-button-text">Learn</span>
                    </div></Link>
                    <Link to="/explore" className="header-button-link"><div className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={exploreImg} alt="logo"></img>
                        <span className="header-button-text">Explore</span>
                    </div></Link>
                    <Link to="/about" className="header-button-link"><div className="header-button mdc-button--outlined">
                        <img className="header-button-img" src={aboutImg} alt="logo"></img>
                        <span className="header-button-text">About</span>
                    </div></Link>
                    <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ? <LoginButtonAuth /> : <StartButtonNonAuth />
                        }
                    </AuthUserContext.Consumer>
                </div>
            </div>
        );
    }
}

const LoginButtonAuth = () => (
    <div>
        <Link to="/start" className="header-button-link"><div className="header-button mdc-button--outlined">
            <img className="header-button-img" src={signinImg} alt="logo"></img>
            <span className="header-button-text">Empieza</span>
        </div></Link>
        <SignOutButton></SignOutButton>
    </div>
);

const StartButtonNonAuth = () => (
    <div>
        <Link to="/login" className="header-button-link"><div className="header-button mdc-button--outlined">
            <img className="header-button-img" src={signinImg} alt="logo"></img>
            <span className="header-button-text">Iniciar</span>
        </div></Link>
    </div>
);