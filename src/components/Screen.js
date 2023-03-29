import React from 'react';
import './Screen.css';

export function Screen ({input, handleChange, handleKeyDown}) {
    return(
        <input className='screen' type="text" value={input} onChange={(event) => handleChange(event.target.value)} onKeyDown={(event)=> handleKeyDown (event.key)}></input>
    )
}