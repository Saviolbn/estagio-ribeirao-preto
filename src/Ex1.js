// 1) Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

import React from 'react'

export const Ex1 = () => {
    var indice = 13;
    var soma = 0;
    var k = 0;

    while (k < indice) {
        k = k+1;
        soma = soma +k;
    }
    return (
        <div>
            Resultado Ex 1: {soma}
        </div>
    )
}
