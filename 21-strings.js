// //Variáveis de tipo string(Texto)
// var texto = `Olá eu sou um texto`;
// console.log(texto);

// //concatenação de strings
// var texto1 = `Olá, `;
// var texto2 = `sou uma string`;
// var texto3 = texto1 + texto2;
// console.log(texto3);

// texto1 += texto2;
// console.log(texto1);

// //Tamanho da string
// var texto4 = `Olá, eu sou um texto`;
// console.log(`Tamanho do texto tem ${texto4.length} caracteres!`);

// //Caracteres de escape
// texto5 = ' Olá meu nome é "Thiago"!';
// console.log(texto5);

// var texto6 = "Quebra de linha\noutra linha";
// console.log(texto6);

// var texto7 = "Tabulação \toutra tabulação";
// console.log(texto7);

// //Obtendo partes de uma string (método substring)
// var texto8 = `O esperto rato, perplexo ficou frente ao aparato.`;
// var sub = texto8.substring(16, 24); // posição onde começa e onde termina
// console.log(sub);
// var sub2 = texto8.substr(10, 4); // posicao onde começa e quantos caracteres depois
// console.log(sub2);

// // substituie partes de uma string (método replace)
// var texto9 = "O rato roeu a roupa do rei de Roma!";
// var novoTexto = texto9.replace("rato", "COELHO");
// console.log(texto9);
// console.log(novoTexto);

// //Maiúsculas e minpusculas (Métodos toUpperCase e ToLowerCase)
// var texto10 = "O RATO roeu a rOUpa do REI de Roma";
// console.log(texto10.toUpperCase());
// console.log(texto10.toLowerCase());

//     //limpando espaços em branco
// var texto11 = "        texto aqui no meio         ";
// console.log("**", texto9, "**");
// console.log("**", texto9.trim(), "**");

// //
// var texto12 = "Orato roeu a roupa do rato de Roma";

// var posicao = texto10.indexOf("rato");
// var ultimaPosicao = texto10.indexOf("rato");
// console.log(
//   Primeiraocorencia: ${posicao} - Ultimaocorencia: ${ultimaPosicao}
// );

//dividindo uma string em partes
var texto13 = "O rato roeu a roupa do rei de Roma";
var palavras = texto13.split(" ");
console.table(palavras);
var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.table(partes);

//
