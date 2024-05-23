function gerarValoresImpares() {
    // Inicializando o array vazio para armazenar valores ímpares
    let valoresImpares = [];

    // Inicializando a variável de controle do loop
    let rodada = 1;

    // Bloco while que irá repetir 10 vezes
    while (rodada <= 10) {
        // Verificando se a rodada atual é ímpar
        if (rodada % 2 !== 0) {
            // Adicionando o valor da rodada atual ao array se for ímpar
            valoresImpares.push(rodada);
        }
        // Incrementando a variável de controle
        rodada++;
    }

    // Imprimindo o array no console
    console.log(valoresImpares);
}

