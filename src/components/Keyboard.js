import React from "react";
import './Keyboard.css';
import Button from "./Buttons.js";

export function Keyboard({input, deleteC, result, setInput}) {
  function handleClick(value) {
    setInput(input + value)
  }
  
  const numbers = [7,8,9,4,5,6,1,2,3,0]

    return (
        <div className='keyboard'>
          <div className='div-numbers'>
            {/*botones de los numeros*/}
            
            {numbers.map(number => 
            <Button key={number} styleClass='number' handleClick={() => handleClick(number)} value={number}/> 
            )}

            <Button styleClass='dot' handleClick={() => handleClick(".")} value="."/>
          </div>  

          <div className='div-signs'>
            {/* botones de los signos y para borrar*/}
            <Button styleClass='delete' handleClick={() => deleteC()} value="del"/>
            <Button styleClass='delete' handleClick={() => setInput("")} value="AC"/>
            <Button styleClass='sign' handleClick={() => handleClick("-")} value="-"/>
            <Button styleClass='sign' handleClick={() => handleClick("+")} value="+"/>
            <Button styleClass='sign' handleClick={() => handleClick("/")} value="/"/>
            <Button styleClass='sign' handleClick={() => handleClick("*")} value="*"/>
            <Button styleClass='equal-sign' handleClick={() => result()} value="="/>
          </div>
        </div>
    )
} 