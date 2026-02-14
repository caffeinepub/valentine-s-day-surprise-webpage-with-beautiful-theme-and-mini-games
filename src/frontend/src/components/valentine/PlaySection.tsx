import { useState } from 'react';
import { Gamepad2, Heart } from 'lucide-react';
import { valentineContent } from '../../config/valentineContent';
import ValentineLayout from './ValentineLayout';
import MemoryMatchGame from './games/MemoryMatchGame';
import LoveQuizGame from './games/LoveQuizGame';

export default function PlaySection() {
  const [activeGame, setActiveGame] = useState<'memory' | 'quiz'>('memory');

  return (
    <ValentineLayout id="play" className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Gamepad2 className="w-12 h-12 text-rose-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 font-serif">
          Let's Play Together!
        </h2>
        <p className="text-xl text-rose-700">
          {valentineContent.playIntro}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveGame('memory')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeGame === 'memory'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white text-rose-600 hover:bg-rose-50 border-2 border-rose-200'
            }`}
          >
            <Heart className="w-5 h-5" fill={activeGame === 'memory' ? 'currentColor' : 'none'} />
            Memory Match
          </button>
          <button
            onClick={() => setActiveGame('quiz')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeGame === 'quiz'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white text-rose-600 hover:bg-rose-50 border-2 border-rose-200'
            }`}
          >
            <Heart className="w-5 h-5" fill={activeGame === 'quiz' ? 'currentColor' : 'none'} />
            Love Quiz
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-rose-200">
          {activeGame === 'memory' ? <MemoryMatchGame /> : <LoveQuizGame />}
        </div>
      </div>
    </ValentineLayout>
  );
}
