import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown , FormControl, Button, Form} from 'react-bootstrap';
import useLogin from '../hooks/useLogin';
import AuthButtons from '../Auth/AuthButtons';


export default function Header() {

    const placeHolderImg = 'https://placehold.co/600x400';

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
                <img src={placeHolderImg}
                    alt="Logo"
                    width="180"
                    height="140"
                    className="d-inline-block align-top" />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/signup">SIGN UP</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
                <Nav.Link as={Link} to="/profilepage">Profile Page</Nav.Link>
                <Nav.Link as={Link} to="/launch">LaunchPage</Nav.Link>
                <Nav.Link as={Link} to="/ingredient-search">Search</Nav.Link>

            </Nav>
            <Nav>
                <AuthButtons />
                {isAuthenticated && (
                    <div>
                        <h2>Profile</h2>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )}
                <button onClick={handleRequestClick}>Ping</button>
                <p>Ping result: {requestResult}</p>
            </Nav>
            <Nav>
                <NavDropdown title="More" id="basic-nav-dropdown" align="end">
                    <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Happens</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">This is a Link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}