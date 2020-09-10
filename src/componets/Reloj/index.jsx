import React, { useState, useEffect } from 'react';

import './index.css';

const Reloj = () => {
    const [ hora, setHora ] = useState('00:00:00');
  
    useEffect(() => {
        const interval = setInterval( () => setHora( new Date().toLocaleTimeString() ), 1000);
        return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="boxReloj">
            <h1>{ hora }</h1>
        </div>
    );
};
export default Reloj;