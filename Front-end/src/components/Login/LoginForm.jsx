import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password
            });
            console.log('Login avvenuto con successo:', response.data);
        } catch (error) {
            console.error('Errore durante il login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 items-center px-4 lg:px-20">
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input  
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</Button>
            <div className="flex flex-col items-center gap-2">
                <p className="">Forgot your password?</p>
                <div className='flex space-x-3 my-5'>
                    <p>Don't have an account?</p>
                    <Link to="/Register" className="font-bold">Sign up</Link>
                </div>
            </div>
        </form>
    );
}
