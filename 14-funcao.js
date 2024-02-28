function saudacao(nome) {
  console.log(`Olá ${nome} seja bem vindo`);
}
saudacao("Aang");
saudacao("Katara");
saudacao("Sokka");

function somar(valor1, valor2) {
  return valor1 + valor2;
}
console.log(`5+4=${somar(5, 4)}`);
console.log(`7,5+2,4=${somar(7.5, 2.4)}`);

var v1 = 7;
var v2 = 9;

console.log(`v1 + v2 = ${somar(v1, v2)}`);
//função que calcula e rertorna o desconto em uma venda;;

function desconto(porcentagem, valor) {
  return (porcentagem / 100) * valor;
}
var total = 2000;
var totaldes = desconto(3, total);
console.log("----------------------------------");
console.log(`Total do pedido: R$:${total}`);
console.log(`Total dos descontos: R$:${desconto(3, total)}`);
console.log(`Valor final da venda: R$:${total - totaldes}`);
console.log("-----------------------------------");
function apresentar(nome, idade, cidade) {
  console.log(
    `Apresento a vocês:${nome}, que tem ${idade}, e mora em ${cidade}`
  );
}
apresentar("Bruno", "64", "Itapesiririca");
apresentar("Cleberton", 27, "Mineiros");
