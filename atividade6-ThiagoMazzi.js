var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (linha = 0; linha < matriz.length; linha++) {
  for (coluna = 0; coluna < matriz[0].length; coluna++) {
    if (linha == coluna)
      console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}
//for(di = 0; di < matriz.length; di++){
   // console.log(matriz[di][di]);
