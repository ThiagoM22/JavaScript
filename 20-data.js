//Criando objeto do tipo data
var data1 = new Date();
console.log(data1);
//Criando um objeto do tipo data com a data específica Date();
var ano = 2007;
var data2 = new Date(`${ano}=01-31`);
console.log(data2);

//Extraindo partes de uma data
var data3 = new Date("2008=03-16");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Feverero",
  "Março",
  "Abril",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mês por escrito`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
console.log(`Dia da semana: ${diaSemana[data3.getDay()]}`);

console.log("-------------------------------------------------");
var idade = 0;
if (data1 < data2.setFullYear(data1.getFullYear())) {
  data2.setFullYear(`${ano}`);
  idade = data1.getFullYear() - (data2.getFullYear() + 1);
} else {
  data2.setFullYear(`${ano}`);
  idade = data1.getFullYear() - data2.getFullYear();
}

console.log(`Meu nome é Thiago Mazzi e eu tenho ${idade} anos \n`);

console.log("===============================");
const dataNasc = new Date("2007=03-14");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getTime();
//console.log(`Diferença: ${diferenca}`);
const idade1 = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade1}`);

console.log("===============================");

const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);

if (
  dataAtual.getMonth() < dataNasc.getMonth() ||
  (dataAtual.getMonth() === dataNasc.getMonth() &&
    dataAtual.getDate() < dataNasc.getDate())
) {
  console.log(`Ainda não fez aniversário!`);
  console.log(`Idade: ${diferencaAnos - 1}`);
}
