import React from 'react';
import './index.css';

const Item = ( { nume_movil, codi_movil, total_eventos, handleClick } ) => (
    <li>
        <a className={total_eventos > 0 ? 'azul':'negro'} href="#!" onClick = { () => handleClick({nume_movil, codi_movil}) } >
            { nume_movil }
        </a>
    </li>
);

export default Item;