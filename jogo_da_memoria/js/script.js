
let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;

//Captura todas as cartas (cards)
const cards = document.querySelectorAll('.card');

//classList - acessa a lista de classes de um elemento, add a classe de nome 'flip'.
function flipCard() {
    if (lockBoard) {
        return;
    }
    if (this === firstCard) {
        return;
    }
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    } else {
        secondCard = this;
    }
    hasFlippedCard = false;

    //Função que verifica se as cartas são iguais
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCard();
        return;
    } else {
        unflipCard();
    }
}

//Desabilita as cartas acertadas. Para isso, basta remover a função addEventListener da carta clicada
function disableCard() {
    firstCard.removeaddEventListener('click', flipCard);
    secondCard.removeaddEventListener('click', flipCard);

    resetBoard();
}

//Vira as cartas novamente para baixo caso o usuário não acerte
function unflipCard() {
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1100);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [false, false];
}

(//Embarralhando as cartas
    function shuffle() {
        cards.forEach((card) => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        })
    })();

//Percorre todas as cartas (.card) do arquivo HTML. 
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

//Iniciar aula 6