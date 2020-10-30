import React, {useContext} from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {AuthContext} from "./context/auth-context";
import swal from "sweetalert"
const Navigation = () => {

    const auth = useContext(AuthContext)

    const logoutHandler = e => {
        swal({
            title: "Do you want to log out?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            //   swal("Poof! Your imaginary file has been deleted!", {
            //     icon: "success",
            //   });
            auth.logout();
            } else {
            //   swal("Your imaginary file is safe!");
            }
          });    
}
    return (
        <Navbar bg='secondary'>
            <Navbar.Brand className='text-white'>NAME OF YOUR WEATHER APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ClassName='text-white btn btn-primary'><Link to='/' >Home</Link> </Nav.Link>

                {
                !auth.isLoggedIn && (
                     <Nav.Link><Link to='/login' ClassName='text-white' style={{ textDecoration: 'none' }}> Login</Link></Nav.Link>
                     )
                }

                {
                auth.isLoggedIn && (
                <Nav.Link className='text-white' onClick={logoutHandler}> Log Out </Nav.Link>
                )
                }

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
} 
export default Navigation;