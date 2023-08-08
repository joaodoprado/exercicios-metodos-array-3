const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesReduce = cidades.reduce(function(acumulador, elementoAtual, indice, cidade) {
    let maior = acumulador
    if(elementoAtual.length > maior.length) {
        maior = elementoAtual
    }
    return maior

    
    
})


console.log(cidadesReduce)