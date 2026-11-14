import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ActivitySpotlight } from './components/ActivitySpotlight';
import { ProposedDatesSection } from './components/ProposedDatesSection';
import { SponsorshipBudget } from './components/SponsorshipBudget';
import { ResourceMatcher } from './components/ResourceMatcher';
import { FaqAccordion } from './components/FaqAccordion';
import { FirstStepForm } from './components/FirstStepForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(undefined);

  const handleSelectSlot = (slotLabel: string) => {
    setSelectedSlot(slotLabel);
    const formElement = document.getElementById('first-step');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E131F] text-[#0E0E0E]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ActivitySpotlight />
        <ProposedDatesSection onSelectSlot={handleSelectSlot} />
        <SponsorshipBudget />
        <ResourceMatcher />
        <FaqAccordion />
        <FirstStepForm selectedSlot={selectedSlot} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
