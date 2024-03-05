import React, { useState } from 'react'

export const Ex2 = () => {

    const calcSequence = num =>{
        if (num === 1) {
            return [0, 1];
        } else {
            const sequence = calcSequence(num - 1);
            sequence.push(sequence.length - 1 + sequence.length - 2);
            return sequence;
        }
    }

    const [number,setNumber] = useState(0);
    const handleClick = () =>{
        (props).setResult(calcSequence(number));
    }
    return (
        <div>
            Ex2:
            <input type="number" onChange={e => setNumber(e.target.value)}></input>
            <button onClick={handleClick}>Calcular</button>
        </div>
    )
}
