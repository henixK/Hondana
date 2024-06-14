import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {  // Cambia l'URL con quello corretto
                email,
                password
            });
            console.log('Login avvenuto con successo:', response.data);
            // Qui puoi fare qualcosa con la risposta, ad esempio salvare l'ID dell'utente o il token di accesso nello stato globale dell'applicazione
        } catch (error) {
            console.error('Errore durante il login:', error);
            setError('Credenziali non valide'); // Imposta un messaggio di errore per l'utente
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
            {error && <p className="text-red-500">{error}</p>} {/* Visualizza il messaggio di errore se presente */}
            <Button>Login</Button>
            <div className="flex flex-col items-center gap-2">
                <p className="">Hai dimenticato la password?</p>
                <div className='flex space-x-3 my-5'>
                    <p>Non hai un account?</p>
                    <Link to="/register" className="font-bold">Registrati</Link>
                </div>
            </div>
        </form>
    );
}
