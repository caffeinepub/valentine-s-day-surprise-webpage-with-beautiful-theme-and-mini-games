import { useState } from 'react';
import { Heart, Mail, Sparkles } from 'lucide-react';

interface MailLetterIntroProps {
  onLetterOpen: () => void;
  onLetterClose: () => void;
}

export default function MailLetterIntro({ onLetterOpen, onLetterClose }: MailLetterIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsAnimating(true);
    // Start the enhanced animation sequence
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
      // Notify parent that letter is now open
      onLetterOpen();
    }, 800);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Notify parent that letter is closed
    onLetterClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-50"
    >
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl mx-4 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="mb-4 animate-bounce-slow">
            <Mail className="w-16 h-16 mx-auto text-rose-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-2 font-serif">
            You've Got Mail
          </h1>
          <p className="text-lg md:text-xl text-rose-700/80 font-light">
            A special message for my beautiful wife 💌
          </p>
        </div>

        {/* Envelope and letter container */}
        <div className="relative flex items-center justify-center mb-8" style={{ minHeight: '400px' }}>
          {/* Particle burst effect on open */}
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={`burst-${i}`}
                  className="absolute text-rose-400 animate-burst-particle"
                  style={{
                    width: `${12 + Math.random() * 16}px`,
                    height: `${12 + Math.random() * 16}px`,
                    animationDelay: `${Math.random() * 100}ms`,
                    '--burst-angle': `${(i / 20) * 360}deg`,
                    '--burst-distance': `${80 + Math.random() * 60}px`,
                  } as React.CSSProperties}
                  fill="currentColor"
                />
              ))}
              {[...Array(15)].map((_, i) => (
                <Sparkles
                  key={`sparkle-${i}`}
                  className="absolute text-pink-400 animate-burst-particle"
                  style={{
                    width: `${10 + Math.random() * 14}px`,
                    height: `${10 + Math.random() * 14}px`,
                    animationDelay: `${Math.random() * 150}ms`,
                    '--burst-angle': `${(i / 15) * 360 + 12}deg`,
                    '--burst-distance': `${100 + Math.random() * 80}px`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}

          {/* Glow effect on open */}
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-rose-400/30 rounded-full blur-3xl animate-glow-pulse" />
            </div>
          )}

          {/* Envelope closed state */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all ${
              isOpen || isAnimating
                ? 'opacity-0 scale-75 pointer-events-none duration-500'
                : 'opacity-100 scale-100 duration-700'
            }`}
          >
            <img
              src="/assets/generated/envelope-closed.dim_1024x1024.png"
              alt="Closed envelope"
              className="w-full max-w-md h-auto drop-shadow-2xl"
            />
          </div>

          {/* Envelope open state with letter */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all ${
              isOpen
                ? 'opacity-100 scale-100 duration-700'
                : isAnimating
                ? 'opacity-0 scale-110 duration-500'
                : 'opacity-0 scale-90 pointer-events-none duration-700'
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Open envelope */}
              <img
                src="/assets/generated/envelope-open.dim_1024x1024.png"
                alt="Open envelope"
                className={`w-full h-auto drop-shadow-2xl ${isOpen ? 'animate-envelope-pop' : ''}`}
              />
              
              {/* Letter emerging from envelope */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 transition-all ${
                  isOpen
                    ? '-translate-y-12 opacity-100 duration-1000 animate-letter-spring'
                    : 'translate-y-0 opacity-0 duration-300'
                }`}
                style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}
              >
                <img
                  src="/assets/generated/letter-paper.dim_1024x1024.png"
                  alt="Love letter"
                  className="w-full h-auto drop-shadow-xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpen}
            disabled={isOpen || isAnimating}
            className={`px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300 ${
              isOpen || isAnimating
                ? 'opacity-50 cursor-not-allowed scale-95'
                : 'hover:shadow-rose-300/50 hover:scale-105 active:scale-95 hover:shadow-2xl'
            }`}
          >
            {isAnimating ? 'Opening...' : 'Open 💌'}
          </button>

          <button
            onClick={handleClose}
            disabled={!isOpen || isAnimating}
            className={`px-8 py-4 bg-white/80 backdrop-blur-sm text-rose-600 text-lg font-semibold rounded-full shadow-lg border-2 border-rose-200 transition-all duration-300 ${
              !isOpen || isAnimating
                ? 'opacity-50 cursor-not-allowed scale-95'
                : 'hover:bg-white hover:border-rose-300 hover:scale-105 active:scale-95'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
