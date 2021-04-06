const jogadorNave = document.getElementById('nave');
const areaDeJogo = document.getElementById('campo-de-jogo');
const tiro = document.querySelector('.tiro');
let posicaoNave = 250;
let posicaoTiro = posicaoNave;
let posicaoTiroLeft = 700;


const moveTiro = () => {
    posicaoTiroLeft += 10;
    if (posicaoTiroLeft < 1210) {
        tiro.style.left = posicaoTiroLeft + 'px';   
    }
}

//Cima
const sobeNave = () => {
    if (posicaoNave <= 0) {
        posicaoNave += 0;
    } else {
        posicaoNave -= 10;
        posicaoTiro = posicaoNave + 151;
        jogadorNave.style.top = posicaoNave + 'px';
        tiro.style.top = posicaoTiro + 'px';
    }
}

//Baixo
const desceNave = () => {
    if (posicaoNave >= 560) {
        posicaoNave -= 0;
    } else {
        posicaoNave += 10;
        posicaoTiro = posicaoNave + 151;
        jogadorNave.style.top = posicaoNave + 'px';
        tiro.style.top = posicaoTiro + 'px';
    }
}

const acionaTiro = () => {
    console.log('teste');
        setInterval(moveTiro, 20);
}

//Função que identifica o botão e chama a função apropriada
const moveNave = evento => {
    if (evento.keyCode == 38) {
        sobeNave();
    } else if (evento.keyCode == 40) {
        desceNave();
    } else if (evento.keyCode == 32) {
        acionaTiro();
    }
}

const inicializar = () => {
    document.addEventListener('keydown', moveNave);
}

window.addEventListener('load', inicializar);

