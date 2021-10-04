import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import Row from 'react-bootstrap/Row';

import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [courses, setCourses] = useState([]);
    // fetch and slice data for viewing home page
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=> res.json())
        .then(data => {
            const sliced = data.slice(0,4)
            setCourses(sliced)
        })
    },[])
    return (
        <div className="pb-5 mb-5">
            <Banner></Banner>
            <div>
                <h3 className="text-center mt-5 text-uppercase">Our <span className="color-header">Courses</span> </h3>
                <hr />
                <div className="container px-4">
                    <Row xs={1} md={2} className="g-4 p-4">
                        {courses.map((course) => <Course key={course.code} course={course}></Course>)}
                    </Row>
                    <p className="text-center pt-5"><NavLink to="/courses" className="link mx-4"  activeClassName="selected">
                           <button className="btn border-primary text-primary border px-5">See more</button>
                        </NavLink></p>
                </div>
            </div>

        </div>
    );
};

export default Home;