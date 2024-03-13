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
