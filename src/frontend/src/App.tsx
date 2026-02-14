import { useState } from 'react';
import FirstEntryLovePrompt from './components/valentine/FirstEntryLovePrompt';
import SurpriseReveal from './components/valentine/SurpriseReveal';
import HeroSection from './components/valentine/HeroSection';
import MessageSection from './components/valentine/MessageSection';
import PlaySection from './components/valentine/PlaySection';
import ClosingSection from './components/valentine/ClosingSection';
import SectionNav from './components/valentine/SectionNav';
import { ThemeProvider } from 'next-themes';

function App() {
  const [hasAnsweredPrompt, setHasAnsweredPrompt] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handlePromptProceed = () => {
    setHasAnsweredPrompt(true);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleReplay = () => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background">
        {!hasAnsweredPrompt ? (
          <FirstEntryLovePrompt onProceed={handlePromptProceed} />
        ) : !isRevealed ? (
          <SurpriseReveal onReveal={handleReveal} />
        ) : (
          <>
            <SectionNav onReplay={handleReplay} />
            <main className="relative">
              <HeroSection />
              <MessageSection />
              <PlaySection />
              <ClosingSection onReplay={handleReplay} />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
