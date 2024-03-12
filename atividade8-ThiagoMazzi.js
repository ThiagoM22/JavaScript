class Aluno {
  constructor(registro, nome, data, curso) {
    this.registro = registro;
    this.nome = nome;
    this.data = data;
    this.curso = curso;
  }
  calcularIdade() {
    console.log(`Sua idade é ${2024 - this.data}`);
  }
  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, nasci em ${this.data}, tenho ${
        2024 - this.data
      } anos, meu RA é ${this.registro}, e faço o curso de ${
        this.curso
      }, no Senai.`
    );
  }
}
const aluno = new Aluno("5687", "Rogério", 2007, "Desenvolvimento de Sistemas");
aluno.calcularIdade();
aluno.apresentar();
