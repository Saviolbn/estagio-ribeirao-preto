//5) Escreva um programa que inverta os caracteres de um string.
import React, { useState } from 'react'

export const Ex5 = () => {
    const[inputValue, setInputValue] = useState("")

    const reverter =(nome) =>{
        const arr =[...nome];
        let emon = "";
        while (arr.length) {
            emon = emon + arr.pop()
        }
    return emon
    }

    const handleClick = () =>{
        setInputValue(reverter(inputValue))
    }
    
    return (
        <div>Ex 5:
            <input type='text' value={inputValue} onChange={(event)=>
                {setInputValue(event.target.value)}
            }/>
            <button type='submit' onClick={handleClick}>Inverter</button>
        </div>
    )
}
