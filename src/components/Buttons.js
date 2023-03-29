import React from "react";
import './Buttons.css';


export default function Button({value, handleClick, styleClass}) {
 
    return(
        <button className={styleClass} onClick={handleClick}>{value}</button>
    )
}