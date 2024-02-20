const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 8;
console.log(numeros);
console.log(numeros[2]);

var Aliens = ["Quatro Braços", "XLR8", "Chama"];
console.log(Aliens);
console.log(Aliens[2]);
console.log("");
console.table(Aliens);
console.log(Aliens.length);
console.log("O vetor tem", Aliens.length, "elementos");
//adicionando elementos ao vetor existente; .push

Aliens.push("Arraiajato");
console.table(Aliens);
Aliens.push("Rath", "Gigante");
console.table(Aliens);

Aliens.unshift("Ultra T"); //adiciona elemento no inicio do array;
console.table(Aliens);

//adicionando um elemento com base em seu indice(posição)
Aliens[4] = "Insectóid";
console.table(Aliens);
console.log("primeira posição:", Aliens[0]);
console.log("Segunda posição:", Aliens[1]);

//removendo elementos do vetor
Aliens.pop(); //remove o ultimo item do vetor
console.table(Aliens);

Aliens.shift(); //remove primeiro elemento do vetor;
console.table(Aliens);

Aliens.splice(0, 1); //remove o elemento a partir do indice 1, contando 1
console.table(Aliens);

