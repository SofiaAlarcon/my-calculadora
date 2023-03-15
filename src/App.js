import './App.css';
import React, { useState } from 'react';


function App() {
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

  function borrarC() {
    setInput(input.substring(0, input.length - 1))
  
  }

  function resultado() {
    setInput(eval(input))

  }

  return (
    <div className="App">

      <div className='calculadora'>
        {/* div más grande */}

        
    
        <input className='pantalla' type="text" value={input} onChange={(event) => handleChange(event.target.value)} onKeyDown={(event)=> handleKeyDown (event.key)}></input>

        

        <div className='teclado'>
          {/* div para los botones*/}

          <div className='div-nros'>
            {/*botones de los numeros*/}
            <button className='boton-numero' onClick={() => setInput(input + "7")}>7</button>
            <button className='boton-numero' onClick={() => setInput(input + "8")}>8</button>
            <button className='boton-numero' onClick={() => setInput(input + "9")}>9</button>
            <button className='boton-numero' onClick={() => setInput(input + "4")}>4</button>
            <button className='boton-numero' onClick={() => setInput(input + "5")}>5</button>
            <button className='boton-numero' onClick={() => setInput(input + "6")}>6</button>
            <button className='boton-numero' onClick={() => setInput(input + "1")}>1</button>
            <button className='boton-numero' onClick={() => setInput(input + "2")}>2</button>
            <button className='boton-numero' onClick={() => setInput(input + "3")}>3</button>
            <button className='boton-numero' onClick={() => setInput(input + "0")}>0</button>
            <button className='boton-punto' onClick={() => setInput(input + ".")}>.</button>

          </div>

          <div className='div-signos'>
            {/* botones de los signos y para borrar*/}
            <button className='boton-borrar' onClick={() => borrarC()}>C</button>
            <button className='boton-borrar' onClick={() => setInput("")}>AC</button>
            <button className='boton-signo' onClick={() => setInput(input + "-")}>-</button>
            <button className='boton-signo' onClick={() => setInput(input + "+")}>+</button>
            <button className='boton-signo' onClick={() => setInput(input + "/")}>%</button>
            <button className='boton-signo' onClick={() => setInput(input + "*")}>x</button>
            <button className='boton-igual' onClick={() => resultado()}>=</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
