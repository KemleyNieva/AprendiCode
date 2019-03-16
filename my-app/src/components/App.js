import React, {Component} from 'react';
import Button from '@material/react-button';

import './App.scss';

import logo from '../assets/aprendiCODEWhite.png';
import logoColor from '../assets/aprendiCODEColor.png';
import learnImg from '../assets/learn.png';
import exploreImg from '../assets/explore.png';
import aboutImg from '../assets/about.png';
import signinImg from '../assets/signin.png';
import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header-logo" src={logo} alt="logo"></img>
        <div className="header-space"></div>
        <div className="header-buttons">
          <Button className="header-button mdc-button--outlined">
            <img className="header-button-img" src={learnImg} alt="logo"></img>
            <span className="header-button-text">Learn</span>
          </Button>
          <Button className="header-button mdc-button--outlined">
            <img className="header-button-img" src={exploreImg} alt="logo"></img>
            <span className="header-button-text">Explore</span>
          </Button>
          <Button className="header-button mdc-button--outlined">
            <img className="header-button-img" src={aboutImg} alt="logo"></img>
            <span className="header-button-text">About</span>
          </Button>
          <Button className="header-button mdc-button--outlined">
            <img className="header-button-img" src={signinImg} alt="logo"></img>
            <span className="header-button-text">Sign In</span>
          </Button>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
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

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="middle">
          <div className="vamosAJugar">
            <span className="vamosAJugar-title">¡VAMOS A JUGAR!</span>
            <div className="vamosAJugar-buttons">
              <Button className="vamosAJugar-button mdc-button--outlined">Regístrate</Button>
              <Button className="vamosAJugar-button">Iniciar</Button>
            </div>
          </div>
        </div>
        <div className="bienvenido">
            <span className="bienvenido-title">BIENVENIDO A <img className="bienvenido-logo" src={logoColor} alt="logo"></img></span>
            <p className="bienvenido-p">Este programa es para niños hispanohablantes que quieren aprendan a codificar con una experiencia interactiva.
              Hecho para niños de 8-12 años.</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
