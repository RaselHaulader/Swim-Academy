import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg'

const Header = () => {


    const linkStyle = {
        color: 'rgba(13, 134, 214, 0.8)'
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand ><img className="logo" src={logo} alt="" /><span className="brand-name">Swimmer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/home" className="link mx-4" activeStyle={linkStyle} activeClassName="selected">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="link mx-4" activeStyle={linkStyle} activeClassName="selected">
                            About
                        </NavLink>
                        <NavLink to="/courses" className="link mx-4" activeStyle={linkStyle} activeClassName="selected">
                            Courses
                        </NavLink>
                        <NavLink to="/instructor" className="link mx-4" activeStyle={linkStyle} activeClassName="selected">
                            Instructor
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;