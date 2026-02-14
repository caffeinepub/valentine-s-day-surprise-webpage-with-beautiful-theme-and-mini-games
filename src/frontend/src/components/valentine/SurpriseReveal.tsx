import { useState } from 'react';
import { Heart } from 'lucide-react';

interface SurpriseRevealProps {
  onReveal: () => void;
}

export default function SurpriseReveal({ onReveal }: SurpriseRevealProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onReveal();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 transition-all duration-1000 ${
        isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-rose-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="mb-8 animate-pulse-slow">
          <Heart className="w-24 h-24 mx-auto text-rose-500 mb-6" fill="currentColor" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6 font-serif">
          For You
        </h1>
        
        <p className="text-xl md:text-2xl text-rose-700 mb-12 font-light">
          A Valentine's Day surprise awaits...
        </p>

        <button
          onClick={handleClick}
          className="group relative px-12 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Open My Valentine
            <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
}
