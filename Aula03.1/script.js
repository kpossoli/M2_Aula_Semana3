function verificarMedia() {
  // Solicitando a média através de um prompt
  let media = parseFloat(prompt("Digite a sua média:"));

  // Verificando se a entrada é um número válido
  if (!isNaN(media)) {
      // Estrutura condicional if
      if (media >= 7) {
          console.log("Parabéns você tirou a média mínima, não esqueça de continuar estudando :)");
      } else {
          console.log("Você não atingiu a média mínima, continue se esforçando!");
      }
  } else {
      console.log("Por favor, insira um número válido.");
  }
}