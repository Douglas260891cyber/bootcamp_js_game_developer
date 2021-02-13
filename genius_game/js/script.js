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
}

//continuar aula 3