import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown , FormControl, Button, Form} from 'react-bootstrap';
import useLogin from '../hooks/useLogin';
import AuthButtons from '../Auth/AuthButtons';
import './Header.css';
import logoImage from './cartoon-fridge.png'


export default function Header(){

    const {
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSubmit,
    } = useLogin();

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="/home">
                <img src={logoImage} 
                alt="Logo" 
                width="180" 
                height="140" 
                className="d-inline-block align-top" />
                </Navbar.Brand>
            <Nav className="me-auto nav-links">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/profilepage">Profile Page</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/ingredient-search">Search</Nav.Link>
                {/* <Nav.Link as={Link} to="/RenderRecipes">Render Recipes</Nav.Link> */}

            </Nav>
            <Nav>
            <AuthButtons className="auth-buttons"/>
                <NavDropdown title="" id="basic-nav-dropdown" align="end">
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://highmid-fridge-platformer.netlify.app">Fridge Game?</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}