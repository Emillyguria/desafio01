

let numero;// declaração da variável

//loop que pede ao usuário para digitar um número até que ele digite o número 5
while(numero !==5){
    numero =  Number(prompt('diga o número secreto '));
    // se ele acertar vai mostrar que acertou, senão mostrará que errou
    if (numero === 5){
        alert('VOCÊ ACERTOU!');
        break;// o loop para se a pessoa acertat
    } else {
        alert('VOCÊ ERROU!');
    }
}