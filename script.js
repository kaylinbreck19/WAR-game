// Get references to HTML elements
const player1Card = document.getElementById("player1-card");
const player2Card = document.getElementById("player2-card");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const winner = document.getElementById("winner");
const playButton = document.getElementById("play-button");

// Initialize player scores
let player1Score = 0;
let player2Score = 0;

// Function to simulate a card draw
function drawCard() {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return { rank, suit };
}

// Function to play a round
function playRound() {
    const card1 = drawCard();
    const card2 = drawCard();

    // Display the drawn cards
    player1Card.textContent = `${card1.rank} of ${card1.suit}`;
    player2Card.textContent = `${card2.rank} of ${card2.suit}`;

    const result = compareCards(card1, card2);

    // Update scores based on the result
    if (result > 0) {
        player1Score++;
    } else if (result < 0) {
        player2Score++;
    }

    updateScore();

    // Check for a winner and disable the play button
    if (player1Score === 26) {
        winner.textContent = "Player 1 Wins!";
        playButton.disabled = true;
    } else if (player2Score === 26) {
        winner.textContent = "Player 2 Wins!";
        playButton.disabled = true;
    }
}

// Function to compare two cards
function compareCards(card1, card2) {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const rank1 = ranks.indexOf(card1.rank);
    const rank2 = ranks.indexOf(card2.rank);
    return rank1 - rank2;
}

// Function to update the score display
function updateScore() {
    score1.textContent = player1Score;
    score2.textContent = player2Score;
}

// Add a click event listener to the play button
playButton.addEventListener("click", playRound);

