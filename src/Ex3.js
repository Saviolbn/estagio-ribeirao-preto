// 3) Descubra a lógica e complete o próximo elemento:


// a) 1, 3, 5, 7, ___

// b) 2, 4, 8, 16, 32, 64, ____

// c) 0, 1, 4, 9, 16, 25, 36, ____

// d) 4, 16, 36, 64, ____

// e) 1, 1, 2, 3, 5, 8, ____

// f) 2,10, 12, 16, 17, 18, 19, ____


import React from 'react'

export const Ex3 = () => {
    return (
        <div style={{width: 800, height:400,textAlign:'justify'}}>
            Ex3:
            <ul>
            <li>A: Resposta 9/// 1-3 = 3-5 = 5-7 = 7-9</li>
            <li>B: Resposta 128 /// 2/4 = 4/8 = 8/16...</li>
            <li>C: Resposta 49(7^2) ///1 = 1^2, 4 = 2^2, 9 = 3^2...</li>
            <li>D: Resposta 100    ///4 = 4(1^2), 16 = 4(2^2), 36 =4(3^2)...</li>
            <li>E: Resposta 13, dado pela sequencia de Fibonacci</li>
            <li>F: Resposta 200, todos os numeros começam com "dez..."</li> 
            </ul>
        </div>
    )
}
