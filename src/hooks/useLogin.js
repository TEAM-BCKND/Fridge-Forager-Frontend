import axios from 'axios';
import { useState } from 'react';

export default function useLogin(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // (e) are events, these functions like eventhandlers

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Put login logic here, (e.g. authentication params etc.)

        console.log('Logging in with', email, "password");

        // When the authentication for the backend is ready you put the call here.
    };

    return {
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSubmit,
    };
};
