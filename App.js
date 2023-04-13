import React, { useState } from "react";
import "./index.css"
const App=()=>{
    const[answer,setAnswer]=useState("")
    const handleClick=(event)=>{
        setAnswer(answer.concat(event.target.name));
    }
    const clear=()=>{
        setAnswer("");
    }
    const backspace=()=>{
        setAnswer(answer.slice(0,answer.length-1));
    }
    const calculate=()=>{
        try{
            setAnswer(eval(answer).toString());
        } catch(err){
            setAnswer("Error");
        }
        setAnswer(eval(answer).toString());
    }
    return(
        <>
        <div className="container">
            
                <input type="text" value={answer}/>
            
            <div className="keypad">
                <button className="highlight" onClick={clear} id="clear">clear</button>
                <button className="highlight" onClick={backspace} id="backspace">del</button>
                <button name="/" className="highlight" onClick={handleClick}>/</button>
                <button  name="7" onClick={handleClick}>7</button>
                <button name="8"  onClick={handleClick}>8</button>
                <button name="9"  onClick={handleClick}>9</button>
                <button name="*" className="highlight" onClick={handleClick}>*</button>
                <button  name="4" onClick={handleClick}>4</button>
                <button name="5"  onClick={handleClick}>5</button>
                <button name="6"  onClick={handleClick}>6</button>
                <button name="-" className="highlight" onClick={handleClick}>-</button>
                <button name="1"  onClick={handleClick}>1</button>
                <button name="2"  onClick={handleClick}>2</button>
                <button name="3"  onClick={handleClick}>3</button>
                <button name="+" className="highlight" onClick={handleClick}>+</button>
                <button name="0"  onClick={handleClick}>0</button>
                <button name="."  onClick={handleClick}>.</button>
                <button className="highlight1" onClick={calculate} id="result" >=</button>
            </div>
        </div>
        </>
    )
}
export default App;