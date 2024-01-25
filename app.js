let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 0 e 10:');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Parabéns!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativas}.`;
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) { 
        exibirTexto('h1', 'O número secreto é menor');
    } else {
        exibirTexto('h1', 'O número secreto é maior');
    }

    tentativas++;
    limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;

    mensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumeros.length;

    if (quantidadeElementos == numeroLimite) {
        listaNumeros = [];
    }

    if (listaNumeros.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}