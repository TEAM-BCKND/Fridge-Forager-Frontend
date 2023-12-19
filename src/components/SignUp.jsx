import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}
