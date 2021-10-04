import React from 'react';
import './Course.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    //destructuring
    const { course, details, img, age, type, courseFee, courseLength, code } = props.course
    return (
        <Col className="course rounded">
            <Card className="h-100">
                <Card.Img className="course-img" variant="top" src={img} />
                <Card.Body>
                    <Card.Text className='price'><span className="price">{type}</span><span>{'$' + courseFee + ' / ' + courseLength}</span></Card.Text>
                    <Card.Title className="pb-3">{course}: {age}</Card.Title>
                    <Card.Text>{details} </Card.Text>
                    <NavLink to={`/details/${code}`}>
                        <Button className="border details-btn text-secondary" variant="light"><i className="fas fa-info-circle"></i> Details</Button>
                    </NavLink>
                </Card.Body>
            </Card> 
        </Col>
    );
};

export default Course;