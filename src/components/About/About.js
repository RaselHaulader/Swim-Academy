import React from 'react';
import './About.css';
import team from '../../images/team.jpg'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="text-center p-5">
            <div className="about-banner text-white">
                <div>
                    <p className="fs-2 fw-lighter">About</p>
                    <NavLink to="/home" className="text-white fw-lighter fs-5 text-decoration-none me-2"  activeClassName="selected">
                        Home &gt;
                    </NavLink>
                    <NavLink to="/courses" className="text-white fw-lighter fs-5 text-decoration-none me-2"  activeClassName="selected">
                        Courses &gt;
                    </NavLink>
                    <NavLink to="/instructor" className="text-white fw-lighter fs-5 text-decoration-none me-2"  activeClassName="selected">
                        Instructor
                    </NavLink>
                </div>
            </div>
            <h3 className="text-center py-5">ABOUT <span className="color-text">US</span></h3>
            <div className="pb-5 mb-5 d-flex about-container align-items-center">
                <div className="w-50">
                    <img className="w-75 rounded" src={team} alt="" />
                </div>
                <div className="w-50">
                    <h5 className="text-secondary">Our Motto</h5>
                    <p className="w-100 mx-auto article">We are an open and friendly swimming school. Each of our little floats is special and unique to us. We know each of our students not only by name, but most of all we listen to them and try to get to know them well. We teach swimming, but also try to pass on moral principles and values.</p>
                    <button className="btn mt-4 border border-secondary text-secondary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;