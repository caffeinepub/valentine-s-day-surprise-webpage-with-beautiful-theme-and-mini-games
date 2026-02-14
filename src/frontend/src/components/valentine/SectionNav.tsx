import { Heart, Home, MessageCircle, Gamepad2, Sparkles } from 'lucide-react';

interface SectionNavProps {
  onReplay: () => void;
}

export default function SectionNav({ onReplay }: SectionNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-rose-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onReplay}
            className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors font-medium"
          >
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="hidden sm:inline">Replay Surprise</span>
          </button>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('message')}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Message"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('play')}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Games"
            >
              <Gamepad2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('closing')}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Closing"
            >
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
