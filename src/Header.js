import React from 'react'
import './Header.css';
import AngularLogo from './assets/AngularJS-Shield.svg';
import ReactLogo from './assets/ReactLogo.svg';
import JavascriptLogo from './assets/Unofficial_JavaScript_logo_2.svg';
import CSSlogo from './assets/CSS3_logo_and_wordmark.svg';
import HTMLlogo from './assets/HTML5_logo_and_wordmark.svg';
import {NavLink } from "react-router-dom";

function Header(props) {
    return (
        <div className="myHeader">
          <img className="header-image" src={AngularLogo} alt="Angular logo"/>
          <img className="header-image" src={ReactLogo} alt="React logo"/>
          <img className="header-image" src={JavascriptLogo} alt="JavaScript logo"/>
          <img className="header-image" src={CSSlogo} alt="CSS logo"/>
          <img className="header-image" src={HTMLlogo} alt="HTML logo"/>
          <div className="myHeader-right">
          <NavLink exact to="/" activeClassName="selected">Home</NavLink >
          <NavLink exact to="/resume" activeClassName="selected">Resume</NavLink >
          <NavLink exact to="/contactMe" activeClassName="selected">Contact Mee..</NavLink >
          </div>
        </div>
    );
}

export default Header
