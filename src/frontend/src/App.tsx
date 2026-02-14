import { useState } from 'react';
import MailLetterIntro from './components/valentine/MailLetterIntro';
import FirstEntryLovePrompt from './components/valentine/FirstEntryLovePrompt';
import SurpriseReveal from './components/valentine/SurpriseReveal';
import HeroSection from './components/valentine/HeroSection';
import MessageSection from './components/valentine/MessageSection';
import PlaySection from './components/valentine/PlaySection';
import ClosingSection from './components/valentine/ClosingSection';
import SectionNav from './components/valentine/SectionNav';
import { ThemeProvider } from 'next-themes';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLovePrompt, setShowLovePrompt] = useState(false);
  const [hasAnsweredPrompt, setHasAnsweredPrompt] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleLetterOpen = () => {
    setShowLovePrompt(true);
  };

  const handleLetterClose = () => {
    setShowLovePrompt(false);
  };

  const handlePromptProceed = () => {
    setHasAnsweredPrompt(true);
    setShowIntro(false);
    setShowLovePrompt(false);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleReplay = () => {
    setIsRevealed(false);
    setHasAnsweredPrompt(false);
    setShowIntro(true);
    setShowLovePrompt(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background">
        {showIntro ? (
          <>
            <MailLetterIntro 
              onLetterOpen={handleLetterOpen}
              onLetterClose={handleLetterClose}
            />
            {showLovePrompt && (
              <FirstEntryLovePrompt onProceed={handlePromptProceed} />
            )}
          </>
        ) : !hasAnsweredPrompt ? (
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
