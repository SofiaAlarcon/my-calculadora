import React, {useState} from "react";
import { Keyboard } from "./Keyboard.js";
import { Screen } from "./Screen.js";
import "./Calculator.css";

export function Calculator() {
  const [input, setInput] = useState("");

  function handleChange(value) {
      if (!isNaN(parseInt(value)) || (value==="")) {
        setInput(value)
      }
    }
    
  function handleKeyDown(key){
    if (key === "Enter") {
      result()
    }
  }

  function result() {
    setInput(eval(input))
  }

  function deleteC() {
    setInput(input.substring(0, input.length - 1))
  }

  return(
    <div className="calculator">
      <Screen input={input} handleChange={handleChange} handleKeyDown={handleKeyDown}/>
      <Keyboard input={input} deleteC={deleteC} result={result} setInput={setInput}/>
    </div>
  )
}

