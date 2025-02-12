// Crie um loop que exiba todos os números pares de 0 a 20.

// declaração de variáveis
let pares=1; 
let numero= 1;

// o while ira mostrar todos os numeros pares até 20
while(pares<20){
    // os numero pares nada mais sao que a multiplicação de um numero por 2:
    pares = 2*numero;// 
    console.log(pares); // mostrando o próximo numero par  
    numero++; // a cada multiplicação acrescenta-se 1 na variável "numero" para que o 2 seja multiplicado pelo próximo numero e assim aparecer todos os numeros pares

}