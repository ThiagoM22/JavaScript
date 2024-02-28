var mes = 3;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`Primeiro Trimestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`Segundo trimestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre");
  default:
    break;
}

var menuSelecionado = "Home";
switch (menuSelecionado) {
  case "Home":
    console.log(`Você clicou no link HOME`);
    break;
  case "Quem somos":
    console.log("Voê clicou no link Quem somos");
    break;
  case "Contato":
    console.log(`Você clicou no link Contato`);
    break;
  default:
    console.log("Opção inválida");
    break;
}
