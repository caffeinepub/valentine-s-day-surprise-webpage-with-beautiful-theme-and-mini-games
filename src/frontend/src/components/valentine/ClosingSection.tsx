import { Heart, ArrowUp } from 'lucide-react';
import { valentineContent } from '../../config/valentineContent';
import ValentineLayout from './ValentineLayout';

interface ClosingSectionProps {
  onReplay: () => void;
}

export default function ClosingSection({ onReplay }: ClosingSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <ValentineLayout id="closing" className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100" withPattern>
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center gap-3 animate-pulse-slow">
          <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
          <Heart className="w-16 h-16 text-pink-500" fill="currentColor" />
          <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6 font-serif">
          Forever & Always
        </h2>

        <p className="text-2xl text-rose-700 mb-12 leading-relaxed">
          Thank you for being my everything. Every day with you is a gift, and I cherish every moment we share together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-rose-600 font-semibold rounded-full border-2 border-rose-300 hover:bg-rose-50 hover:scale-105 transition-all duration-300 shadow-lg"
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

        <footer className="pt-8 border-t border-rose-300">
          <p className="text-rose-600 flex items-center justify-center gap-2">
            <span>© {currentYear}</span>
          </p>
        </footer>
      </div>
    </ValentineLayout>
  );
}
