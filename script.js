//your code here

const deck = document.querySelector('#deck');
const cards = deck.querySelectorAll('.whitebox2');

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    deck.insertBefore(cards[j], cards[i]);
    deck.insertBefore(cards[i], cards[j]);
  }
}

shuffleCards();
