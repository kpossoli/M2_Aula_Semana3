function verificarNotas() {
    // Solicitando as duas notas através de prompts
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));

    // Verificando se as entradas são números válidos
    if (!isNaN(nota1) && !isNaN(nota2)) {
        // Calculando a soma das notas
        let soma = nota1 + nota2;

        // Exibindo a mensagem apropriada no documento
        if (soma === 10) {
            document.write("Você arrasou, aprovado com excelência");
        } else if (soma >= 7) {
            document.write("Aprovado");
        } else {
            document.write("Reprovado");
        }
    } else {
        document.write("Por favor, insira notas válidas.");
    }
}
