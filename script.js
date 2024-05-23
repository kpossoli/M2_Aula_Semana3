function gerarConvite() {
    // Obter o nome do convidado através do prompt
    const nomeConvidado = window.prompt("Digite o seu nome:");

    // Criar a mensagem do convite
    const mensagemConvite = `
        Com imensa alegria, convidamos você, ${nomeConvidado}, para a nossa união!

        Juliana e Felipe
        21/07/2024
        Mogi das Cruzes

        Sua presença será o nosso maior presente!
    `;

    // Exibir a mensagem do convite no documento
    document.getElementById("convite").innerHTML = mensagemConvite;
}

// Chamar a função para gerar o convite
gerarConvite();