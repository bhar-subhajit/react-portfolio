import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function Resume() {
    return (
        <div className="home extra-margin">
            <div className="row">
                <div className="col left-col">
                    <FontAwesomeIcon icon={faGraduationCap}/><span> Education:</span>
                </div>
                <div className="col right-col">
                    <div className="col-heading"> Academy Of Technology</div>
                    <div className="col-desc"> Electronics And Communication Engineering - 2019</div>
                </div>
            </div>

            <div className="row">
                <div className="col left-col">
                    <FontAwesomeIcon icon={faBriefcase}/><span> Work Experience:</span>
                </div>
                <div className="col right-col">
                    <div className="col-heading"> Tata Consultancy Services</div>
                    <div className="col-desc"> Frontend Developer. 2019 - present</div>
                </div>
            </div>
            
            <div className="row">
                <div className="col left-col">
                    <FontAwesomeIcon icon={faLaptopCode}/><span> Skills:</span>
                </div>
                <div className="col right-col">
                    {/* <div className="col-heading"> Skills</div> */}
                    <div className="col-desc"> Angular . React JS . Javascript . HTML . CSS3 . Bootstrap</div>
                </div>
            </div>   
        </div>
    )
}

export default Resume;
