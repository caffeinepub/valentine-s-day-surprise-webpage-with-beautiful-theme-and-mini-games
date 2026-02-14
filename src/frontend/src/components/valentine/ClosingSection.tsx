import { useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import ValentineLayout from './ValentineLayout';

interface ClosingSectionProps {
  onReplay: () => void;
}

export default function ClosingSection({ onReplay }: ClosingSectionProps) {
  const [choice, setChoice] = useState<'yes' | 'no' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ValentineLayout id="closing" className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-red-950/30" withPattern>
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center gap-3 animate-pulse-slow">
          <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
          <Heart className="w-16 h-16 text-pink-500" fill="currentColor" />
          <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
        </div>

        {/* Teddy with jump animation */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/assets/generated/valentine-teddy.dim_512x512.png" 
            alt="Valentine's teddy bear"
            className="w-48 h-48 md:w-64 md:h-64 animate-teddy-jump"
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 font-serif">
          Will You Be My Valentine?
        </h2>

        {/* Yes/No Choice Buttons */}
        {!choice && (
          <div className="mb-8">
            <p className="text-2xl text-rose-700 dark:text-rose-300 mb-6 leading-relaxed">
              I have one last question for you...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setChoice('yes')}
                className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xl rounded-full hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Heart className="w-6 h-6" fill="currentColor" />
                Yes
              </button>
              <button
                onClick={() => setChoice('no')}
                className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 font-bold text-xl rounded-full border-2 border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Response Messages */}
        {choice === 'yes' && (
          <div className="mb-8 animate-fade-in">
            <p className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400 mb-4 leading-relaxed">
              I love you, wife garu 💕
            </p>
            <p className="text-xl text-rose-700 dark:text-rose-300 leading-relaxed">
              Thank you for being my everything. Every day with you is a gift, and I cherish every moment we share together.
            </p>
          </div>
        )}

        {choice === 'no' && (
          <div className="mb-8 animate-fade-in">
            <p className="text-2xl md:text-3xl font-semibold text-rose-600 dark:text-rose-400 mb-4 leading-relaxed">
              No means: go and click Yes. 😊
            </p>
            <button
              onClick={() => setChoice(null)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 font-semibold rounded-full border-2 border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
            Back to Top
          </button>
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Heart className="w-5 h-5" fill="currentColor" />
            Replay Surprise
          </button>
        </div>
      </div>
    </ValentineLayout>
  );
}
