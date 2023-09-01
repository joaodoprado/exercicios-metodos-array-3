const input = [
   'cubos',
  'cuggbyos'
]




let palavras = input.trim().split('\n');
let senhaCorreta = palavras[0];
let senhaDigitada = palavras[1];
let acertos = 0;

    
 for (let caracter of senhaDigitada) {
    if (caracter === senhaCorreta[acertos]) {
        acertos++;
     }

}
  console.log(senhaCorreta.lenght)