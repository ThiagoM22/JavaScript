//condição simples unica
var anoNascimento = 2008;

if (anoNascimento > 2003) console.log("A pessoa nasceu depois de 2003");

if (anoNascimento < 2003) console.log("A pessoa nasceu antesde 2003");

if (anoNascimento == 2003) console.log("A pessoa nasceu em 2003");

//condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000) console.log("A pessa nasceu depois de 2000!");
else console.log("A pessoa nasceu antes de 2000");

//condicional composto com if
const login = "admin";
var senha = "123456";

//----banco de dados-----//
const loginUser = "admin";
const senhaUser = "admin";
//-----------------------//
if (login == loginUser && senha == senhaUser) console.log("acesso permitido");
else console.log("Acesso negado");

function sinal(cor) {
  if (cor == "vermelho") {
    console.log("Pare");
  } else if (cor == "amarelo") {
    console.log("Preste atenção");
  } else if (cor == "verde") {
    console.log("Siga");
  } else {
    console.log("catar coquinho");
  }
}
sinal("verde");

//desvio condicional if com bloco de comandos

var idade = 20;

if (idade <= 18) {
  console.log("entrou no if..");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de códigos if`);
}
console.log(`Terminei!`);

//desvio condicional if inline (ternário);
//validação (algo = algo) ou (algo > algumacoisa)
//? (IF)
//Termos de aceite do IF(se for verdadeiro)
//: (ELSE)
//se for falso
//teste de validação == teste ? "bla bla" : ("ble ble")
var preco = 500;

