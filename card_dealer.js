/**
 * Generates initial card placement in a Concentrate game.
 * @returns {Promise<string[]>} An promise of an array of a shuffle of 16 cards
 */
async function dealCards() {
    const xs = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
    for (let i = xs.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      [xs[i], xs[r]] = [xs[r], xs[i]];
    }
    return xs;
  }
  
