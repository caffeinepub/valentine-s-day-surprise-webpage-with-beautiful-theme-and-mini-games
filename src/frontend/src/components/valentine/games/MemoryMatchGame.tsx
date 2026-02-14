import { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Gift, Flower2, Music, Coffee, Sun } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Card {
  id: number;
  icon: LucideIcon;
  isFlipped: boolean;
  isMatched: boolean;
}

const icons = [Heart, Star, Sparkles, Gift, Flower2, Music, Coffee, Sun];

export default function MemoryMatchGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initializeGame = () => {
    const gameCards: Card[] = [];
    icons.forEach((icon, index) => {
      gameCards.push(
        { id: index * 2, icon, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, icon, isFlipped: false, isMatched: false }
      );
    });
    
    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      if (firstCard && secondCard && firstCard.icon === secondCard.icon) {
        // Match found
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          );
          setFlippedCards([]);
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setIsWon(true);
    }
  }, [cards]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards(prev => [...prev, id]);
    
    if (flippedCards.length === 1) {
      setMoves(m => m + 1);
    }
  };

  if (isWon) {
    return (
      <div className="text-center py-12">
        <div className="mb-6 flex justify-center gap-2 animate-bounce">
          <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
          <Heart className="w-20 h-20 text-pink-500" fill="currentColor" />
          <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
        </div>
        <h3 className="text-4xl font-bold text-rose-600 mb-4">You Win!</h3>
        <p className="text-xl text-rose-700 mb-2">Completed in {moves} moves</p>
        <p className="text-lg text-rose-600 mb-8">You're amazing! ❤️</p>
        <button
          onClick={initializeGame}
          className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-lg text-rose-700">
          Moves: <span className="font-bold text-rose-600">{moves}</span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
        {cards.map(card => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isFlipped || card.isMatched}
              className={`aspect-square rounded-2xl transition-all duration-300 transform ${
                card.isFlipped || card.isMatched
                  ? 'bg-gradient-to-br from-rose-400 to-pink-500 scale-100'
                  : 'bg-gradient-to-br from-rose-200 to-pink-200 hover:scale-105 hover:shadow-lg'
              } ${card.isMatched ? 'opacity-60' : ''}`}
            >
              <div className="w-full h-full flex items-center justify-center">
                {(card.isFlipped || card.isMatched) ? (
                  <Icon className="w-8 h-8 md:w-12 md:h-12 text-white" fill="currentColor" />
                ) : (
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-300" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={initializeGame}
          className="text-rose-600 hover:text-rose-700 font-medium underline"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
