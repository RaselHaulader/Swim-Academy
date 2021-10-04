import React from 'react';
import './Instructor.css'
import Instructor1 from '../../images/instrurctor.jpg'
import Instructor2 from '../../images/instructor2.jpg'
import Instructor3 from '../../images/instructor3.jpg'
import { NavLink } from 'react-router-dom';

const Instructor = () => {
    return (
        <div className="instructor p-5">
            <div className="instructor-banner text-white">
                <div>
                    <p className="fs-2 fw-lighter">Instructor</p>
                    <NavLink to="/home" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                        Home &gt;
                    </NavLink>
                    <NavLink to="/courses" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                        Courses  &gt;
                    </NavLink>
                    <NavLink to="/about" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                        About
                    </NavLink>

                </div>
            </div>
            <h1 className="text-center py-4 text-secondary">OUR <span className="heading-color">BEST INSTRUCTOR</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 ">
                        <div className="instructor-item">
                            <img className="instructor-img" src={Instructor1} alt="" />
                            <div className="instructor-details">
                                <h5>Swim Instructor</h5>
                                <h6>Olivia</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 ">
                        <div className="instructor-item">
                            <img className="instructor-img" src={Instructor2} alt="" />
                            <div className="instructor-details">
                                <h5>Swim Instructor</h5>
                                <h6>Emma</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 ">
                        <div className="instructor-item">
                            <img className="instructor-img" src={Instructor3} alt="" />
                            <div className="instructor-details">
                                <h5>Swim Instructor</h5>
                                <h6>Sophia</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Instructor;