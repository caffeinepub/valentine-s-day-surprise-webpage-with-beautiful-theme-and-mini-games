import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface FirstEntryLovePromptProps {
  onProceed: () => void;
}

export default function FirstEntryLovePrompt({ onProceed }: FirstEntryLovePromptProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initialize No button position to center-right area
    if (containerRef.current && noButtonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      
      setNoButtonPosition({
        top: (containerRect.height / 2) - (buttonRect.height / 2),
        left: (containerRect.width * 0.6) - (buttonRect.width / 2),
      });
    }
  }, []);

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!containerRef.current || !noButtonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = noButtonRef.current.getBoundingClientRect();
    
    // Calculate safe bounds (keep button fully inside container)
    const maxTop = containerRect.height - buttonRect.height - 20;
    const maxLeft = containerRect.width - buttonRect.width - 20;
    const minTop = 20;
    const minLeft = 20;

    // Generate new random vertical position
    let newTop = Math.random() * maxTop;
    let newLeft = Math.random() * maxLeft;

    // Ensure minimum distance from current position (at least 100px movement)
    const currentTop = noButtonPosition.top;
    const currentLeft = noButtonPosition.left;
    const distance = Math.sqrt(Math.pow(newTop - currentTop, 2) + Math.pow(newLeft - currentLeft, 2));
    
    if (distance < 100) {
      // Force a bigger jump if too close
      newTop = currentTop > containerRect.height / 2 ? minTop : maxTop - 50;
      newLeft = Math.random() * (maxLeft - minLeft) + minLeft;
    }

    setIsNoButtonMoving(true);
    setNoButtonPosition({
      top: Math.max(minTop, Math.min(maxTop, newTop)),
      left: Math.max(minLeft, Math.min(maxLeft, newLeft)),
    });

    setTimeout(() => setIsNoButtonMoving(false), 300);
  };

  const handleYesClick = () => {
    onProceed();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-50">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      {/* Main prompt container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-2xl mx-4 p-8 md:p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl"
        style={{ minHeight: '400px' }}
      >
        <div className="text-center mb-12">
          <div className="mb-6 animate-pulse-slow">
            <Heart className="w-20 h-20 mx-auto text-rose-500" fill="currentColor" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4 font-serif">
            Do you love me?
          </h1>
          
          <p className="text-lg md:text-xl text-rose-700/80 font-light">
            Choose wisely... 💕
          </p>
        </div>

        {/* Buttons container with relative positioning for No button */}
        <div className="relative" style={{ minHeight: '200px' }}>
          {/* Yes button - fixed position */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleYesClick}
              className="group relative px-12 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Yes! 💖
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* No button - absolute positioned, moves on click */}
          <button
            ref={noButtonRef}
            onClick={handleNoClick}
            className={`absolute px-10 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-semibold rounded-full shadow-lg transition-all ${
              isNoButtonMoving ? 'duration-300' : 'duration-150'
            }`}
            style={{
              top: `${noButtonPosition.top}px`,
              left: `${noButtonPosition.left}px`,
              transform: 'translate(0, 0)',
            }}
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
}
