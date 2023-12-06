alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
alert(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
        //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        alert('Isso ai! Você descobriu o número secreto '+ numeroSecreto + ' número de tentativas ' + tentativas);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//++ para comitar
// + Commit
// + Commit
//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}



//alert('Boas vindas ao jogo do número secreto !');
//let numeroSecreto = Math.floor(Math.random() * 10);
//alert(numeroSecreto);
//let chute = prompt('Escolha um número entre 1 a 10');
//
////condição
//if(chute == numeroSecreto){
//    alert('Isso ai ! Você descobriu o número secreto ${numeroSecreto} ');
//    alert(`refere ${numeroSecreto} `);
//}
//else
//{
//    alert('Continue tentando, pois não acertou o número ');
//}if (chute < numeroSecreto) {
//    alert('O número que você escolheu é menor');
//} else {
//    alert('O número que você escolheu é maior')
//}