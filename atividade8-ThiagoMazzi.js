class Aluno {
  constructor(registro, nome, data, curso) {
    this.registro = registro;
    this.nome = nome;
    this.data = data;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.data;
  }
  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, nasci em ${
        this.data
      }, tenho ${this.calcularIdade()} anos, meu RA é ${
        this.registro
      }, e faço o curso de ${this.curso}, no Senai.`
    );
  }
}
const aluno = new Aluno("5687", "Rogério", 2007, "Desenvolvimento de Sistemas");
aluno.calcularIdade();
aluno.apresentar();
console.log(
  `-----------------------------------------------------------------------------------------------------------------------------`
);
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  pedidoSorvete() {
    console.log(
      `Você pediu um sorvete de ${this.sabor}, do tamanho ${this.tamanho}. O preço ${this.preco}\n`
    );
  }
  alterarPreco(preconovo) {
    this.preco = preconovo;
    console.log(
      `O preço do sorvete sabor ${this.sabor}, tamanho ${this.tamanho} foi alterado.`
    );
  }
}

var pedido1 = new Sorvete(`Morango`, `R$ 10,00`, `|G|`);
pedido1.pedidoSorvete();
var pedido2 = new Sorvete(`Chocolate`, `R$ 5,00`, `|P|`);
pedido2.pedidoSorvete();
var pedido3 = new Sorvete(`Melancia`, `R$ 8,00`, `|M|`);
pedido3.pedidoSorvete();
pedido1.alterarPreco(`R$ 10,51`);
pedido1.pedidoSorvete();

console.log("----------------------------------------------------------------");
//Atividade 1
function comp(texto1, texto2) {
  if (texto1.toUpperCase() == texto2.toUpperCase()) {
    console.log("As duas strings são iguais");
  } else {
    console.log("As duas strings são diferentes");
  }
}
comp("roberta", "Roberta");
console.log("----------------------------------------------------------------");
function extrair(str) {
  const regex = /\d+/g;
  return str.match(regex);
}
const string = "O preço do produto é R$12,99";
const numeros = extrair(string);
console.log(numeros);

console.log("----------------------------------------------------------------");
function inverterPalavras(frase) {
  const palavras = frase.split(" ");

  const palavrasInvertidas = [];

  for (let i = palavras.length - 1; i >= 0; i--) {
    palavrasInvertidas.push(palavras[i]);
  }

  return palavrasInvertidas.join(" ");
}

const fraseOriginal = "Meu name é roger 10 ben 10";
const fraseInvertida = inverterPalavras(fraseOriginal);
console.log(fraseInvertida);
