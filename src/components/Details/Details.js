import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Details.css'

const Details = () => {
    // get from dynamic routing
    const { code } = useParams()
    // this reserve all courses from server
    const [courses, setCourse] = useState([]);
    // store filtered data
    const [display, setDisplay] = useState([])
    // fetch course data from server
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RaselHaulader/json/main/courses.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    // filter clicked course
    useEffect(() => {
        const check = courses.filter((item) => item.code === parseInt(code))
        setDisplay(check)
    }, [code, courses])

    const { course, img, details, instructor, age, classLength, day, courseFee, courseLength } = display[0] ? display[0] : {}
    return (
        <div>
            <h3 className="text-center py-5 text-uppercase">Learn More about  <span className="color-text">Your Course</span></h3>
            <div className="pb-5 mb-5 d-flex details-container ">
                <div className="w-50">
                    <img className="w-100 pe-3 details-img rounded" src={img} alt="" />
                </div>
                <div className="w-50">
                    <h5 className="text-secondary"> Course Name: {course}</h5>
                    <div className="w-100 article">
                        <p>{details}</p>
                        <p> Trainer: {instructor}</p>
                        <p> Age: {age}</p>
                        <p> Class Length: {classLength}</p>
                        <p> Course Length: {courseLength}</p>
                        <p> Schedule: {day}</p>
                        <p> Course Fee: ${courseFee}</p>
                    </div>
                    <NavLink to="/courses" className="text-white fw-lighter fs-5 text-decoration-none me-2" activeClassName="selected">
                        <button className="btn border border-secondary text-secondary">All Courses</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Details;