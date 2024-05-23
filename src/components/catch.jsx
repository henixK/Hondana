// In un componente React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5174/api.php')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>{data.message}</p>
                </div>
            ) : (
                <p>Caricamento...</p>
            )}
        </div>
    );
};

export default MyComponent;
