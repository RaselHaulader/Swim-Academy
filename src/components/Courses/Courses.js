import React, { useEffect, useState } from 'react';
import './Courses.css'
import Row from 'react-bootstrap/Row';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container px-4">
            <div className="text-center heading">
                <h1 className="py-4">Explore <span className="color-text">Our Courses</span> </h1>
                <p className="px-5">Do you want to learn to swim? We teach swimming from the very beginning, where
                    our instructors approach everyone with patience and understanding.</p>
            </div>
            <Row xs={1} md={3} className="g-4 p-4">
                {courses.map((course) => <Course course={course}></Course>)}
            </Row>
        </div>
    );
};

export default Courses;