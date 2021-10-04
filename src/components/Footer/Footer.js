import React from 'react';
import './Footer.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


const Footer = () => {
    return (
        <div className="bg-dark footer w-100 row p-5">
            <div className="col-md-3 col-12">
                <h4>Swim Academy</h4>
                <p>Swim Academy are passionate about sports and physical activity. Our school was created out of passion for water sports and personal development.</p>

            </div>
            <div className="col-md-2 col-12">
                <h4>Location</h4>
                <p>Zero point <br /> Jashore 7400</p>

                <h4> Hours</h4>
                <p>Mon-Fri: 8:00 - 22:00 <br />
                    Sat: 8:00 - 21:00 <br />
                    Sun: 8:00 - 20:00</p>
            </div>
            <div className="col-md-3 col-12">
                <h4>Explore</h4>
                <p className="text-truncate">Discover Benefits of Swimming Lessons for Kid</p>
                <p>Home</p>
                <p>About</p>
                <p>Courses</p>
                <p>Instructor</p>
            </div>
            <div className="col-md-4 col-12">
                <h4>Contact us</h4>
                <p>Contact with us to know more details</p>
                <p>Contact@gmail.com</p>
                <p>Don't hesitate to call <br />
                    252-151-2053</p>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Sign up</InputGroup.Text>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>


            </div>
            <hr />
            <p className="pt-5 text-center">© Copyright 2021 SwimAcademy</p>
        </div>
    );
};

export default Footer;