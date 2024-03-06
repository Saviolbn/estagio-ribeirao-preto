// // 4) Você está em uma sala com três interruptores, 
// cada um conectado a uma lâmpada em uma sala diferente. 
// Você não pode ver as lâmpadas da sala em que está, 
// mas pode ligar e desligar os interruptores quantas vezes quiser. 
// Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// // Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, 
// qual interruptor controla cada lâmpada?


import React from 'react'

export const Ex4 = () => {
    return (
        <div style={{width: 1000, height:250,textAlign:'justify'}}>
            Ex 4:<br/>
            nomeando interruptores A, B, C, associados respectivamente a lampadas X, Y, Z.<br/>
            Ligar 2 lampadas e as memorizar como X e Y acesas a 2 interruptores, logo o unico apagado é o Z, e o interruptor C <br/>
            Agora retorno e apago uma delas, como C/Z ja foi intentificado, a que antes estava acesa é indentificada a A e a segunda a B
            </div>
    )
}
