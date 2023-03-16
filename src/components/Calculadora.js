import React, {useState} from "react";
import { Teclado } from "./Teclado.js";
import { Pantalla } from "./Pantalla.js";
import "./Calculadora.css";

export function Calculadora() {
  const [input, setInput] = useState("");

  function handleChange(value) {
      if (!isNaN(parseInt(value)) || (value==="")) {
        setInput(value)
      }
    }
    
  function handleKeyDown(key){
    if (key === "Enter") {
      resultado()
    }
  }

  function resultado() {
    setInput(eval(input))
  }

  function borrarC() {
    setInput(input.substring(0, input.length - 1))
  }

  return(
    <div className="calculadora">
      <Pantalla input={input} handleChange={handleChange} handleKeyDown={handleKeyDown}/>
      <Teclado input={input} borrarC={borrarC} resultado={resultado} setInput={setInput}/>
    </div>
  )
}

