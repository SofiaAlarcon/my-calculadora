import React from "react";
import './Botones.css';


export default function Boton({value, handleClick, styleClass}) {
 
    return(
        <button className={styleClass} onClick={handleClick}>{value}</button>
    )
}