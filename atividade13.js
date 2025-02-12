// Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

let raioU = prompt('qual é o raio'); // irá perguntar para o usuário qual é o raio 
let pi = Math.PI; // variável para guardar o valor de pi


function area (raio){
    return area = pi* Math.pow(raio,2);// essa função vai retornar o valor do cálculo feito para achar o valor da área do circulo (pi vezes o raio elevado a 2)
}

console.log(area(raioU));// imprime o valor da área do circulo usando o raio dado pelo usúario