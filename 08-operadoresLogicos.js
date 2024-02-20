var manha = true;
var sono = false;
console.log("----------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);
console.log("operador AND(E),:", manha && sono); //verificar se é manhã e estou com sono
console.log("operador OR(ou)", manha || sono); // comparando se é manhâ ou estou com sono
sono = true;
console.log("----------------");
console.log("operador AND(E),:", manha && sono); //verificar se é manhã e estou com sono
console.log("operador OR(ou)", manha || sono); // comparando se é manhâ ou estou com sono
manha = false;
sono = false;
console.log("----------------");
console.log("operador AND(E),:", manha && sono); //verificar se é manhã e estou com sono
console.log("operador OR(ou)", manha || sono); // comparando se é manhâ ou estou com sono
