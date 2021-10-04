import React from 'react';
import './Instructor.css'
import Instructor1 from '../../images/instrurctor.jpg'
import Instructor2 from '../../images/instructor2.jpg'
import Instructor3 from '../../images/instructor3.jpg'

const Instructor = () => {
    return (
        <div className="instructor py-5">
            <div className="instructor-banner text-white">
                <div>
                    <h4>Instructor</h4>
                    <p>About</p>
                </div>
            </div>
            <h1 className="text-center py-4 text-secondary">OUR BEST INSTRUCTOR</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4 ">
                        <div className="instructor-item">
                            <img className="instructor-img" src={Instructor1} alt="" />
                            <div className="instructor-details">
                                <h5>Swim Instructor</h5>
                                <h6>Olivia</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="instructor-item">
                            <img className="instructor-img" src={Instructor2} alt="" />
                            <div className="instructor-details">
                                <h5>Swim Instructor</h5>
                                <h6>Emma</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
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