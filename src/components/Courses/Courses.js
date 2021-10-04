import React, { useEffect, useState } from 'react';
import './Courses.css'
import Row from 'react-bootstrap/Row';
import Course from '../Course/Course';
import { NavLink } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    // fetch data from json
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="p-5">
                <div className="course-banner text-white">
                    <div className="text-center">
                        <p className="fs-2 fw-lighter">Courses</p>
                        <NavLink to="/home" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                            Home &gt;
                        </NavLink>
                        <NavLink to="/about" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                            About &gt;
                        </NavLink>
                        <NavLink to="/instructor" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                            Instructor
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="container px-4">
                <div className="text-center heading">
                    <h1 className="py-4 text-uppercase">Explore <span className="color-text">Our Courses</span> </h1>
                    <p className="px-5 w-75 mx-auto pb-4">Do you want to learn to swim? We teach swimming from the very beginning, where
                        our instructors approach everyone with patience and understanding.</p>
                </div>
                <Row xs={1} md={3} className="g-4 p-4">
                    {courses.map((course) => <Course course={course}></Course>)}
                </Row>
            </div>
        </div>
    );
};

export default Courses;