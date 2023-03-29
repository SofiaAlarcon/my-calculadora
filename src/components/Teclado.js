import React from "react";
import './Teclado.css';
import './Botones.js';
import Boton from "./Botones.js";

export function Teclado({input, borrarC, resultado, setInput}) {
  function handleClick(valor) {
    setInput(input + valor)
  }
  
  const numbers = [7,8,9,4,5,6,1,2,3,0]

    return (
        <div className='teclado'>
          <div className='div-nros'>
            {/*botones de los numeros*/}
            
            {numbers.map(number => 
            <Boton key={number} styleClass='boton-numero' handleClick={() => handleClick(number)} value={number}/> 
            )}

            <Boton styleClass='boton-punto' handleClick={() => handleClick(".")} value="."/>
          </div>  

          <div className='div-signos'>
            {/* botones de los signos y para borrar*/}
            <Boton styleClass='boton-borrar' handleClick={() => borrarC()} value="C"/>
            <Boton styleClass='boton-borrar' handleClick={() => setInput("")} value="AC"/>
            <Boton styleClass='boton-signo' handleClick={() => handleClick("-")} value="-"/>
            <Boton styleClass='boton-signo' handleClick={() => handleClick("+")} value="+"/>
            <Boton styleClass='boton-signo' handleClick={() => handleClick("/")} value="/"/>
            <Boton styleClass='boton-signo' handleClick={() => handleClick("*")} value="*"/>
            <Boton styleClass='boton-igual' handleClick={() => resultado()} value="="/>
          </div>
        </div>
    )
} 