import React from "react";
import './Link.css';

export default function Link({ site, logo}){
    return(
        <a className="info" href={site} target="_blank" rel="noopener noreferrer"><img className="logo" src={logo} alt="github"></img></a>
    )
} 
