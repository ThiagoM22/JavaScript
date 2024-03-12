// class pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objetos do "tipo" Pessoa
// var pessoa1 = new pessoa("Rogéria", 43);
// var p2 = new pessoa("Taldo Pedrin", 18);
// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();
// console.log(
//   "===================================Abstração==================================="
// );

// // ----------------------------------------------------------------------------------------------------
// //Abstração - Abstrair caracteristicas marcantes e descartando detalhes irrelevantes.
// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos`
// );
// meuPet.alimentar();
// console.log(
//   "====================================Herança===================================="
// );
// //-----------------------------------------------------------------------------------------------------
// //Herança - herdas partes do código da superclasse
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }
//   Alimentar() {
//     console.log(`Um animal ${this.nome} foi alimentado`);
//   }
//   emitirSom() {
//     console.log("Barulho padrão de animl");
//   }
// }
// class Catioro extends Animal {
//   alimentar() {
//     console.log(`O catioro ${this.nome} foi alimentado.`);
//   }
//   emitirSom() {
//     console.log(`Au Au!!`);
//   }
// }
// const meuCatioro = new Catioro(`Ship`, 4, "Ração");
// const pet = new Catioro(`Benjamin`, 2, `Ração`);
// pet.Alimentar();
// pet.emitirSom();
// console.log(" ");
// meuCatioro.alimentar();
// meuCatioro.emitirSom();

// console.log(
//   "==================================Encapsulamento=================================="
// );
// //Encapsulamento = proteger prorpriedades de classe para que não possam ser acessadas ou modificadas por outras partes do código;
// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   getNome() {
//     return this.nome;
//   }
//   setNome(nomenovo) {
//     this.nome = nomenovo;
//   }
// }

// const novoPetzinho = new Petzinho(`Enormossauro`, 3, `Dinossauro`);

// console.log(novoPetzinho.getNome());
// novoPetzinho.setNome(`Triceratops`);
// console.log(" ");
// console.log(novoPetzinho.getNome());

console.log(
  "===================================Polimorfismo==================================="
);
//Polimorfismo - Pode tratar
console.log("--------------------Polimorfismo--------------------");
console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}
