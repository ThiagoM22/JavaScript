function idade(ano) {
  let tempo = new Date();
  let year = tempo.getFullYear();
  return year - ano;
}
console.log(`Sua idade é ${idade(2007)}`);
console.log("---------------------------------");

function viagem(litro) {
  return litro * 12;
}
console.log(`Você poderá andar:${viagem(8)}Km`);

console.log("---------------------------------  ");
function votar(idade) {
  if (idade >= 16 && idade < 18) {
    console.log("Você pode votar, não obrigatório");
  } else if (idade < 16) {
    console.log("não pode votar");
  } else {
    console.log("Você pode votar");
  }
}
votar(85);
console.log("---------------------------------");
function votarui(idade) {
  switch (true) {
    case idade < 16:
      console.log("Você não pode votar");
      break;
    case idade >= 16 && idade < 18:
      console.log("Você pode votar, mas não é obrigado");
      break;
    case idade >= 85:
      console.log("Você pode votar, mas não é obrigado");
      break;

    default:
      console.log("Você pode votar");
      break;
  }
}
votarui(85);
