import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg='secondary'>
            <Navbar.Brand className='text-white'>NAME OF YOUR WEATHER APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to='/' ClassName='text-white'>Home</Link> </Nav.Link>
                <Nav.Link><Link to='/login' ClassName='text-white'> Login</Link></Nav.Link>
                <Nav.Link><Link to='/signup' ClassName='text-white'> Sign Up</Link> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
} 
export default Navigation;