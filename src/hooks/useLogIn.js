import axios from 'axios';
import { useState } from 'react';

export default function useLogin(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Login logic here

        console.log('Logging in with', email, "password");

        // You might call an API here
    };

    return {
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSubmit,
    };
};
