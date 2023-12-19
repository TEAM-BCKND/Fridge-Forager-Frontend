import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown , FormControl, Button, Form} from 'react-bootstrap';
import useLogin from '../hooks/useLogin';



export default function Header(){

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
                <Nav.Link as={Link} to="/ingredient-search">Search</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
            {/* <FormControl type="email" placeholder="Email" className="mr-sm-2"/>
            <FormControl type="password" placeholder="Password" className="mr-sm-2" /> */}
            <FormControl type="email" placeholder="Email" className="mr-sm-2" value={email} onChange={handleEmailChange}/>
            <FormControl type="password" placeholder="Password" className="mr-sm-2" value={password} onChange={handlePasswordChange} />
                <Button variant="outline-success" type="submit">Log In</Button>
            </Form>
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