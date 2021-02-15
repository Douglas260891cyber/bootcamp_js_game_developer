let ordem = [];
let clickOrdem = [];
let pontuacao = 0;

//0-verde
//1-vermelho
//2-amarelo
//3-azul

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');

const embaralharOrdem = () => {
    let valorAleatorio = Math.floor(Math.random() * 4);
    ordem[ordem.length] = valorAleatorio;
    clickOrdem = [];

    for (i in ordem) {
        let elementoCor = criarElementoCor(ordem[i]);
        acenderCor(elementoCor, Number(i) + 1);
    }
}

const acenderCor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('opacidade');
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('opacidade');
    })
}

//Verifica se ordem clicada confere com a ordem emitida pelo jogo
const checarOrdem = () => {
    for (let i in clickOrdem) {
        if (clickOrdem[i] != ordem[i]) {
            gameOver();
            break;
        }
    }
    if (clickOrdem.length == ordem.length) {
        alert(`Pontuação: ${pontuacao}`);
        proximoNivel();
    }
}

const click = (cor) => {
    clickOrdem[clickOrdem.length] = cor;
    criarElementoCor(cor).classList.add('opacidade');

    setTimeout(() => {
        criarElementoCor(cor).classList.remove('opacidade');
        checarOrdem();
    }, 250)
}

const criarElementoCor = (cor) => {
    if (cor == 0) {
        return verde;
    } else if (cor == 1) {
        return vermelho;
    } else if (cor == 2) {
        return amarelo;
    } else if (cor == 3) {
        return azul;
    }
}

const proximoNivel = () => {
    pontuacao += 5;
    embaralharOrdem();
}

const gameOver = () => {
    alert(`Pontuação: ${pontuacao}! \n 
    Vocẽ perdeu o jogo. Click em Ok para continuar.`);
    //Zerando o ordem e a ordem clicada
    ordem = [];
    clickOrdem = [];

    iniciarJogo();
}

const iniciarJogo = () => {
    alert('Bem vindo ao Genesis!');
    pontuacao = 0;

    proximoNivel();
}

//inserindo os clicks
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

iniciarJogo(); 


//continuar aula 4