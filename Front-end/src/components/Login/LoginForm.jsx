import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import { Link } from 'react-router-dom';

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
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 items-center px-4 lg:px-32">
            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-1/3 p-4 rounded-2xl bg-blue-japan text-white font-bold">
                Login
            </button>

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
