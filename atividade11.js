//Crie um loop que imprima a tabuada do número 7, de 1 a 10.
// declaração de variáveis
let tabuada7=1; 
let numero= 1;

// enquanto nao chegar no 70 (7x10) ela irá multiplicar
while(tabuada7<70){

    tabuada7 = 7*numero;// essa variavel guardará o valor da multpicação com o 7 com algum número
    console.log(`7x${numero} é igual á ${tabuada7}`); // mostrando valor 
    numero++; // a cada multiplicação acrescenta-se 1 na variável "numero" para que o 7 seja multiplicado com o numero seguinte 

}