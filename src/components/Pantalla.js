import React from 'react';
import './Pantalla.css';

export function Pantalla ({input, handleChange, handleKeyDown}) {
    return(
        <input className='pantalla' type="text" value={input} onChange={(event) => handleChange(event.target.value)} onKeyDown={(event)=> handleKeyDown (event.key)}></input>
    )
}