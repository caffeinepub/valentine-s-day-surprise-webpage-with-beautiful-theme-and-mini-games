import { Heart, ArrowDown } from 'lucide-react';
import { valentineContent } from '../../config/valentineContent';
import ValentineLayout from './ValentineLayout';

export default function HeroSection() {
  const scrollToMessage = () => {
    const element = document.getElementById('message');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ValentineLayout id="hero" className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/user-photo-hero.dim_1600x900.png)',
        }}
      />
      
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30" />
      
      <div className="relative z-10 text-center">
        <div className="mb-8 flex justify-center gap-4 animate-bounce-slow">
          <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
          <Heart className="w-20 h-20 text-pink-500" fill="currentColor" />
          <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-rose-600 mb-6 font-serif animate-fade-in drop-shadow-lg">
          {valentineContent.heroHeadline}
        </h1>

        <p className="text-2xl md:text-3xl text-rose-700 mb-4 font-light animate-fade-in-delay drop-shadow-md">
          {valentineContent.wifeName}
        </p>

        <p className="text-xl md:text-2xl text-rose-600/90 mb-12 animate-fade-in-delay-2 drop-shadow-md">
          {valentineContent.heroSubtitle}
        </p>

        <button
          onClick={scrollToMessage}
          className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300"
        >
          Read Your Message
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </ValentineLayout>
  );
}
