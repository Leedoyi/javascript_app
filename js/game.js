const symbols = ["🍎", "🍌", "🥝", "🍇", "🍓", "🍊", "🍈", "🍍"];
const cards = [...symbols, ...symbols];

let flippedCards = [];
let matchedPairs = 0;
let canFlip = true;

const gameContainer = document.getElementById("game-container");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(symbol, index) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.index = index;
  cardElement.addEventListener("click", handleCardClick);
  cardElement.innerHTML = '<span class="hidden-symbol">&#x1F0A0;</span>';

  gameContainer.appendChild(cardElement);
}

function handleCardClick() {
  if (!canFlip) return;

  const clickedCard = this;
  const index = clickedCard.dataset.index;

  if (flippedCards.length < 2 && !flippedCards.includes(index)) {
    flippedCards.push(index);
    clickedCard.classList.add("flipped");
    clickedCard.innerHTML = cards[index];

    if (flippedCards.length === 2) {
      canFlip = false;
      setTimeout(checkForMatch, 1000);
    }
  }
}

function checkForMatch() {
  const [index1, index2] = flippedCards;
  const card1 = document.querySelector(`.card[data-index="${index1}"]`);
  const card2 = document.querySelector(`.card[data-index="${index2}"]`);

  if (cards[index1] === cards[index2]) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === symbols.length) {
      alert("축하드립니다🎉 모든 카드의 짝을 맞췄습니다!👏");
      resetGame();
    }
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");

    card1.innerHTML = '<span class="hidden-symbol">&#x1F0A0;</span>';
    card2.innerHTML = '<span class="hidden-symbol">&#x1F0A0;</span>';
  }

  flippedCards = [];
  canFlip = true;
}

function resetGame() {
  matchedPairs = 0;
  canFlip = true;
  flippedCards = [];

  shuffleArray(cards);

  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((card) => {
    card.classList.remove("flipped", "matched");
    card.innerHTML = '<span class="hidden-symbol">&#x1F0A0;</span>';
  });
}

shuffleArray(cards);

cards.forEach((symbol, index) => createCard(symbol, index));
