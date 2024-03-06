//laço de repetição for (let index = 0; index < array.length; index++)
//escrever para o usuario 1000 "prestar mais atenção as aulas!"
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}
console.log("---------------------------");

for (let i = 0; i < 1000; i++) {
  console.log("prestar mais atenção");
}
console.log("---------------------------");
//escreva todos os números de 1 a 20;
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("---------------------------");

for (let n = 2; n <= 20; n += 2) {
  console.log(n);
}
console.log("---------------------------");
for (let n = 0; n <= 20; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
}
//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos.
console.log("---------------------------");
var oi = 0;
var num = [5, 6, 8, 14, 0, 9, 7, 2];
for (let n = 0; n < num.length; n++) {
  oi += num[n];
}
console.log(oi);

//Multiplique todos os seus elementos por 3 utilizando o loop for;
//Em seguida mostre o novo vetor;

for (n = 0; n < num.length; n++) {
  num[n] *= 3;
}
console.table(num);
//dada a matriz 2x3, escrever para o usuario todos os seus elementos;
//com as respectivas posições;
//[8,4,1]
//[3,7,8]
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}
