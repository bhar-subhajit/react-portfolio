import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactMe() {
    return (
        <div className="home extra-margin">
            <div className="">
                <FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/in/subhajit-bhar-800b8b96">https://www.linkedin.com/in/subhajit-bhar-800b8b96</a>
            </div>
        </div>
    )
}

export default ContactMe;
