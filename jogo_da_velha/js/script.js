let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');
let btn = document.getElementById('btn-iniciar');

mudarJogador('X')

function escolherQuadrado(id) {

    let quadrado = document.getElementById(id);

    if (vencedor !== null) {
        return;
    }
    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;//O conteúdo da classe 'quadrado' vai receber o jogador 
    quadrado.style.color = '#000'; //O conteúdo vai receber a cor preta
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador; //O conteúdo da classe 'jogador-selecionado' vai receber o jogador 
}

function checaVencedor() {
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7'); //Talvez seja necessário trocar '1' por 1 = strings por numeros
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eIgual = false;
    if ((quadrado1.innerHTML !== '-') && (quadrado1.innerHTML === quadrado2.innerHTML) && (quadrado2.innerHTML === quadrado3.innerHTML)) {
        eIgual = true;
    }
    return eIgual;
}

function reIniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        //Cada quadrado do HTML tem um id que representa números que vão de 1 a 9
        //que serão representados pelo i. Obs: verificar no HTML para compreender melhor.  
        let quadradoHtml = document.getElementById(i);
        quadradoHtml.style.background = '#eee';
        quadradoHtml.innerHTML = '-';
        quadradoHtml.style.color = '#eee';
    }
    mudarJogador('X');
}

btn.addEventListener('click', reIniciar);


