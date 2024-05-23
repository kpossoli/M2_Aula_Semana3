function imprimirNumerosPares() {
    // Usando um laço for para percorrer de 1 até 10
    for (let i = 1; i <= 10; i++) {
        // Verificando se o número é par
        if (i % 2 === 0) {
            // Imprimindo o número par no documento
            document.write(i + "<br>");
        }
    }
}
