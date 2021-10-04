import React from 'react';
import './Course.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Course = (props) => {
    const {course, details,img,age,type, courseFee, courseLength} = props.course
    return (
        <Col className="course">
            <Card className="h-100">
                <Card.Img className="course-img" variant="top" src={img} />
                <Card.Body>
                <Card.Text className='price'><span className="price">{type}</span><span>{'$'+ courseFee + ' / '+ courseLength}</span></Card.Text>
                    <Card.Title className="pb-3">{course}: {age}</Card.Title>
                    <Card.Text>{details} </Card.Text>
                    <Button className="border text-secondary" variant="light">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;