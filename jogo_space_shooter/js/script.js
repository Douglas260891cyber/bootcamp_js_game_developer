const jogadorNave = document.getElementById('nave');
const areaDeJogo = document.getElementById('campo-de-jogo');
//const tiro = document.querySelector('.tiro'); 
let posicaoNave = 0;
let posicaoTiro = 0;



//Cima
const sobeNave = () => {
    if (posicaoNave <= 0) {
        posicaoNave += 0;
        jogadorNave.style.top = posicaoNave + 'px';
        //    tiro.style.top = posicaoNave + 'px';
    } else {
        posicaoNave -= 10;
        jogadorNave.style.top = posicaoNave + 'px';
        //      tiro.style.top = posicaoNave + 'px';
    }
}

//Baixo
const desceNave = () => {
    if (posicaoNave >= 560) {
        posicaoNave -= 0;
        jogadorNave.style.top = posicaoNave + 'px';
        // tiro.style.top = posicaoNave + 'px';
    } else {
        posicaoNave += 10;
        jogadorNave.style.top = posicaoNave + 'px';
        // tiro.style.top = posicaoNave + 'px';
    }
}

//Função que identifica o botão e chama a função apropriada
const moveNave = evento => {
    if (evento.keyCode == 38) {
        sobeNave();
    } else if (evento.keyCode == 40) {
        desceNave();
    } else if (evento.keyCode == 32) {
        posicaoTiro = posicaoNave;
        acionaTiro(32);
    }
}

const acionaTiro = valor => {
    if (valor == 32) {
        console.log('Tiro acionado');
       // const tiro = document.querySelector('.tiro');
        areaDeJogo.setAttribute('class', 'tiro');
    }
}

/*Aciona tiro
const tiroLaser = () => {
    let laser = criarElementoLaser();
    areaDeJogo.appendChild(laser); 
    moverLaser(); 
}
const criarElementoLaser = () => {
    let posicaoTiroX = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));  //Estudar isto
    let posicaoTiroY = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));  
    let novoLaser = document.createElement('img'); 
    novoLaser.src = "img/laser.png"; 
    novoLaser.classList.add('tiro'); 
    novoLaser.style.left = posicaoTiroX + 'px'; 
    novoLaser.style.top = (posicaoTiroY - 10) + 'px'; 
    return novoLaser; 
}
const moverLaser = () => {
    
}
*/


const inicializar = () => {
    document.addEventListener('keydown', moveNave);
}

window.addEventListener('load', inicializar);

