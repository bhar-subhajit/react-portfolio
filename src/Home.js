import React, { Component } from 'react'
import './Home.css';
import Avatar from './assets/avatar.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img alt="avatar" src={Avatar} className="avatar"/>
                <div className="home-intro">
                    <p className="text1">Hi, I am <b>Subhajit Bhar</b></p>
                    <p className="text2">A frontend developer with hands-on experience in Javascript frameworks like Angular and libraries like React JS.</p>
                    <p className="text3">Currently working as a Hybrid Mobile Application developer in TATA CONSULTANCY SERVICES</p>
                </div>
            </div>

            
        )
    }
}

export default Home;