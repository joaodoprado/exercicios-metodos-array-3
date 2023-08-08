const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNum = numeros.reduce(function(acumulador, elementoAtual, indice, numeros) {
    let maior = acumulador
    if (maior < elementoAtual) {
        maior = elementoAtual
    }

    return maior
})

console.log(maiorNum)