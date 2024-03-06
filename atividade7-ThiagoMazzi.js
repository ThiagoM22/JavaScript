var habA = 100003;
var habB = 300004;
var anos = 0;
while (habA < habB) {
  //   habA += habA * 0.03;
  //   habB += habB * 0.015;
  var taxaA = 0.03 * habA;
  var taxaB = 0.015 * habB;
  habA += taxaA;
  habB += taxaB;
  anos++;
}
console.log(
  `Para que a cidade A alcance a cidade B serão necessários ${anos} anos`
);
console.log(Math.round(habA));
console.log("============================================");

// var matriz = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ];
// var jogador1 = "X";
// var jogador2 = "O";
// function velha() {
//   for (var l = 0; l < matriz.length; l++) {
//     for (var c = 0; c < matriz.length; c++) {
//       matriz[l][c] = Math.random();
//       if (matriz[l][c] <= 0.5) {
//         matriz[l][c] = jogador1;
//       } else {
//         matriz[l][c] = jogador2;
//       }
//     }
//   }
//   console.table(matriz);
//   switch (true) {
//     case jogador1 === matriz[0][0] &&
//       matriz[0][0] === matriz[0][1] &&
//       matriz[0][1] === matriz[0][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[1][0] &&
//       matriz[1][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[1][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[2][0] &&
//       matriz[2][0] === matriz[2][1] &&
//       matriz[2][1] === matriz[2][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[0][0] &&
//       matriz[0][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[2][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[0][2] &&
//       matriz[0][2] === matriz[1][1] &&
//       matriz[1][1] === matriz[2][0]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[0][0] &&
//       matriz[0][0] === matriz[0][1] &&
//       matriz[0][1] === matriz[0][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[1][0] &&
//       matriz[1][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[1][2]:
//       console.log(`O x venceu`);
//       break;
//     case jogador1 === matriz[2][0] &&
//       matriz[2][0] === matriz[2][1] &&
//       matriz[2][1] === matriz[2][2]:
//       console.log(`O x venceu`);
//       break;

//     case jogador2 === matriz[0][0] &&
//       matriz[0][0] === matriz[0][1] &&
//       matriz[0][1] === matriz[0][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[1][0] &&
//       matriz[1][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[1][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[2][0] &&
//       matriz[2][0] === matriz[2][1] &&
//       matriz[2][1] === matriz[2][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[0][0] &&
//       matriz[0][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[2][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[0][2] &&
//       matriz[0][2] === matriz[1][1] &&
//       matriz[1][1] === matriz[2][0]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[0][0] &&
//       matriz[0][0] === matriz[0][1] &&
//       matriz[0][1] === matriz[0][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[1][0] &&
//       matriz[1][0] === matriz[1][1] &&
//       matriz[1][1] === matriz[1][2]:
//       console.log(`O o venceu`);
//       break;
//     case jogador2 === matriz[2][0] &&
//       matriz[2][0] === matriz[2][1] &&
//       matriz[2][1] === matriz[2][2]:
//       console.log(`O o venceu`);
//       break;
//     default:
//       console.log("Deu velha;");
//   }
// }

// velha();

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");
  tabuleiro[linha][coluna] = jogador;
  console.table(tabuleiro);
  for (i = 0; i < tabuleiro.length; i++) {
    switch (true) {
      case tabuleiro[0][i] === tabuleiro[0][i] &&
        tabuleiro[0][i] === tabuleiro[0][i]:
        if (tabuleiro[0][0] == "O") {
          console.log("JogadorO ganhou o jogo");
          break;
        }
      case tabuleiro[i][0] === tabuleiro[i][0] &&
        tabuleiro[i][1] === tabuleiro[i][2]:
        if (tabuleiro[0][0] == "O") {
          console.log("JogadorO ganhou o jogo");
          break;
        }
      case tabuleiro[i][0] === tabuleiro[i][0] &&
        tabuleiro[i][1] === tabuleiro[i][2]:
        if (tabuleiro[0][0] == "X") {
          console.log("JogadorX ganhou o jogo");
        }
        break;
      case tabuleiro[0][i] === tabuleiro[0][i] &&
        tabuleiro[0][i] === tabuleiro[0][i]:
        if (tabuleiro[0][0] == "X") {
          console.log("JogadorX ganhou o jogo");
        }
        break;
      case tabuleiro[0][0] === tabuleiro[0][0] &&
        tabuleiro[1][1] === tabuleiro[1][1]:
        if (tabuleiro[0][0] == "O") {
          console.log("JogadorO ganhou o jogo");
        }
        break;
      case tabuleiro[0][2] === tabuleiro[0][2] &&
        tabuleiro[1][1] === tabuleiro[2][0]:
        if (tabuleiro[0][0] == "O") {
          console.log("JogadorO ganhou o jogo");
        }
        break;
      case tabuleiro[0][0] === tabuleiro[0][0] &&
        tabuleiro[1][1] === tabuleiro[1][1]:
        if (tabuleiro[0][0] == "X") {
          console.log("JogadorX ganhou o jogo");
        }
        break;
      case tabuleiro[0][2] === tabuleiro[0][2] &&
        tabuleiro[1][1] === tabuleiro[2][0]:
        if (tabuleiro[0][0] == "X") {
          console.log("JogadorX ganhou o jogo");
        }
        break;
      default:
        console.log("Velha");
        break;
    }
  }
 
}

jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
