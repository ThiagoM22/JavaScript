var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log("1 - " + frutas);

frutas.push("Tangerina");
console.log("2-");
console.table(frutas);
console.log("---------------------------------");

console.log("3-");
frutas.unshift("Goiaba");
console.table(frutas);
console.log("---------------------------------");

console.log("4- O elemento do indice 5 é", frutas[5]);
console.log("---------------------------------");

console.log("5-");
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);
console.log("---------------------------------");

console.log("6-");
frutasCopy = frutas.slice(2, 5);
console.table(frutasCopy);

console.log("---------------------------------");
var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

console.log("---------------------------------");
console.log(numeros[2]);
console.log("---------------------------------");

var numeroscopy = numeros.slice();
console.table(numeroscopy);
console.log("---------------------------------");
//for(n = 0; n<numeroscopy.length; n++){
//numeroscopy[n] = numeroscopy[n]*2
//}
numeroscopy[0] = numeroscopy[0] * 2;
numeroscopy[1] = numeroscopy[1] * 2;
numeroscopy[2] = numeroscopy[2] * 2;
numeroscopy[3] = numeroscopy[3] * 2;
numeroscopy[4] = numeroscopy[4] * 2;
console.table(numeroscopy);
