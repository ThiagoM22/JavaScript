var matriz = [
  [2, 5, 6],
  [1, 9, 3],
  [8, 5, 4],
];

console.log("diagonal1:", matriz[0][0], matriz[1][1], matriz[2][2]);
console.log("diagonal2:", matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("diagonal3:", matriz[2][2], matriz[1][1], matriz[0][0]);
console.log("diagonal4:", matriz[2][0], matriz[1][1], matriz[0][2]);

console.log("-----------------------------------------------------");
var usuario = ["Douglas", 49, "Verde", "Uva", "Itapui", "Rogério "];
console.log("Olá", usuario[0] + "! Seja bem vindo ao nosso sistema.");
console.log(
  "Você mora no",
  usuario[4],
  ", e tem um pet chamado",
  usuario[5] + "."
);
console.log(
  "Sua idade é",
  usuario[1],
  "e gosta muito da fruta",
  usuario[3] + "."
);
console.log("Sua cor favorita é", usuario[2] + ".");
