// Import necessary dependencies
const { expect } = require('chai');
const { compareCards } = require('./script'); // Import the compareCards function from script.js

// Describe the compareCards function tests
describe('compareCards', () => {
    it('should return a positive number if the first card is higher rank', () => {
        const card1 = { rank: 'King', suit: 'Hearts' };
        const card2 = { rank: 'Queen', suit: 'Diamonds' };
        const result = compareCards(card1, card2);
        expect(result).to.be.greaterThan(0); // Expect the result to be greater than 0 for higher rank card1
    });

    it('should return a negative number if the second card is higher rank', () => {
        const card1 = { rank: 'Jack', suit: 'Spades' };
        const card2 = { rank: 'Ace', suit: 'Clubs' };
        const result = compareCards(card1, card2);
        expect(result).to.be.lessThan(0); // Expect the result to be less than 0 for higher rank card2
    });

    it('should return 0 for cards of equal rank', () => {
        const card1 = { rank: '10', suit: 'Diamonds' };
        const card2 = { rank: '10', suit: 'Hearts' };
        const result = compareCards(card1, card2);
        expect(result).to.equal(0); // Expect the result to be equal to 0 for equal rank cards
    });
});
