import React from "react";
import './Teclado.css';
import './Botones.js';
import Boton from "./Botones.js";

export function Teclado({input, borrarC, resultado, setInput}) {
  function handleClick(valor) {
    setInput(input + valor)
  }

    return (
        <div className='teclado'>
          
          <div className='div-nros'>
            {/*botones de los numeros*/}
            <Boton styleClass='boton-numero' handleClick={() => handleClick(7)} value={7}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(8)} value={8}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(9)} value={9}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(4)} value={4}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(5)} value={5}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(6)} value={6}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(1)} value={1}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(2)} value={2}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(3)} value={3}/>
            <Boton styleClass='boton-numero' handleClick={() => handleClick(0)} value={0}/>
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