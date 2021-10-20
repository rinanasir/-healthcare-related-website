import { faPowerOff, faUserCircle, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const userIcon = <FontAwesomeIcon icon={faUserCircle} />
    const signOutIcon = <FontAwesomeIcon icon={faPowerOff} />
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold text-primary fs-3">Green Life</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/service">Services</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link> */}
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="link">{signOutIcon} Logout</Button> :
                            <Nav.Link as={Link} to="/login">{signOutIcon} Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {userIcon} <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;