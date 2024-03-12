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

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} ganhou!`);
      return jogadorAtual;
    }
  }

  for (let i = 0; i < 3; i++) {
    // Verifica colunas
    if (
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[0][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[0][i]} ganhou!`);
      return jogadorAtual;
    }
  }

  if (
    // Verifica diagonais
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[0][0] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} ganhou!`);
    return jogadorAtual;
  }

  if (
    // Verifica diagonais
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[0][2] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} ganhou!`);
    return jogadorAtual;
  }

  if (!tabuleiro.some((linha) => linha.includes(" "))) {
    // Empate
    console.log(`O jogo empatou!`);
    return "Empate";
  }

  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual); // Jogada do jogador 1
  console.table(tabuleiro); // Exibir o tabuleiro atualizado
  vencedor = verificaVencedor(); // Verificar vencedor

  if (!vencedor) {
    jogar(jogadorAtual); // Se não houver vencedor, joga o jogador 2
    console.table(tabuleiro); // Exibir o tabuleiro atualizado
    vencedor = verificaVencedor(); // Verificar vencedor após jogada do jogador 2
  }
}