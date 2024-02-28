function idade(ano) {
  var tempo = new Date();
  var year = tempo.getFullYear();
  return year - ano;
}
console.log(`Sua idade é ${idade(2007)}`);
console.log("---------------------------------");

function viagem(litro) {
  return litro * 12;
}
console.log(`Você poderá andar:${viagem(8)}Km`);
