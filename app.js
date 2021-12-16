const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let locked = false
let firstCard, secondCard

function flipCard() {
    if(locked) return;
    if(this === firstCard) retunrn;

    this.classList.toggle('flip');

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        check();
    }
}

function check() {
    if (firstCard.dataset.cocktail === secondCard.dataset.cocktail) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        reset()
    } else {
        locked = true;
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            reset()
        }, 1500);
    }
}

function reset() {
    [hasFlipped, locked] = [false, false];
    [firstCard, secondCard] = [null, null]
}

function shuffle() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 20);
        card.getElementsByClassName.order = random;
    })
}

cards.forEach(card => card.addEventListener('click', flipCard))