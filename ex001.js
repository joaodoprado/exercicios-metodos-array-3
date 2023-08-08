// a
const numerosA = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];


const resultadoA = numerosA.sort(function(a, b) {
    return a - b;

})

console.log(resultadoA)

// b
const numerosB = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]


const resultadoB = numerosB.sort(function(a, b) {
    return b - a;
})

console.log(resultadoB)

// c
const numerosC = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]



console.log(numerosC.sort());

// d
const frutasD = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const resultadoD = frutasD.sort(function(a,b) {
    return a.localeCompare(b)
})
console.log(resultadoD)

// e
const frutasE = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const resultadoE = frutasE.sort(function(a,b) {
    return b.localeCompare(a);
})

console.log(resultadoE)

// f
const frutasF = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const resultadoF = frutasF.sort(function(a, b) {
    if (a.length < b.length) {
        return 1
    }

    if (b.length < a.length) {
        return -1
    }
})

console.log(resultadoF)