// 2) Dado a sequência de Fibonacci, 
// onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
// informado pertence ou não a sequência.

import React, { useState } from 'react'

export const Ex2 = () => {

    const calcSequence = (num) =>{
        var penultimo = 0, ultimo = 1;
        var atual;
        if (num <=2) {
            atual = num-1;
        } else {
            for (var count = 3; count <= num; count++){
                atual = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = atual;
                console.log(atual)
                setSequence ={...sequence,atual}
            }
            console.log(sequence)
        }
        return sequence
    }
    let [sequence, setSequence] = useState('');
    const [number,setNumber] = useState(0);
    const handleClick = () =>{
        calcSequence(number)
        console.log(sequence)
    };
    const handleChange = event => {
        setNumber(event.target.value);
    };
    return (
        <div>
            Ex2:
            <input type="number" onChange={handleChange}></input>
            <button onClick={handleClick}>Calcular</button>
            <div>{sequence}</div>
        </div>
    )
}
