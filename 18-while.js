// let contado = 0;

// while (contado < 5) {
//   contado++;
//   console.log(contado);
// }
// console.log("----------------------------");
// var x = 20;
// while (x > 10) {
//   console.log(`Entrei no laço while...`);
//   x--;
// }
// console.log("Terminei");
// console.log("----------------------------");
// let coutdown = 5;
// while (coutdown > 0) {
//   console.log(coutdown);
//   coutdown--;
// }
// console.log("Lançamento!");

// //Estourando o limite do cartão - versão while
// var limite = 500;
// var fatura = 0;
// while (fatura <= limite) {
//   let gasto = Math.random() * 100; // cria valor entre 0 a 1
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------ fatura: R$ ${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão.`);
//   //&& faz somente um IF sem else
// }
// var limite = 500;
// var fatura = 0;
// do {
//   let gasto = Math.random() * 100; // cria valor entre 0 a 1
//   fatura += gasto;
//   console.log(
//     `Gastei R$ ${gasto.toFixed(2)} ------ fatura: R$ ${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`Estourou o limite do cartão.`);
// } while (fatura <= limite);

//Jogo cara e coroa - melhor de 3 tentativas
// repetição - 3 tentativas
//var cara ou coroa - aleatória
//while;
var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";

  if (escolhaJogador == moeda) {
    console.log(`Parabéns, você escolheu ${escolhaJogador} e ganhou!`);
    vitoria++;
  } else {
    console.log(`Que pena, você ${escolhaJogador} e perdeu!`);
    derrota++;
  }

  rodada++;
}
console.log(`-----------------------------------`);
console.log(`|             Placar              |`);
console.log(`-----------------------------------`);
console.log(`|Vitórias:       |       ${vitoria}        |`);
console.log(`|Derrotas:       |       ${derrota}        |`);
console.log(`-----------------------------------`);
console.log(``);
console.log(`-----------------------------------`);
console.log(
  `|       ${
    vitoria > derrota ? "Você Ganhou o jogo" : "Você perdeu o jogo"
  }        |`
);
console.log(`-----------------------------------`);
