import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ActivitySpotlight } from './components/ActivitySpotlight';
import { ResourceMatcher } from './components/ResourceMatcher';
import { FaqAccordion } from './components/FaqAccordion';
import { FirstStepForm } from './components/FirstStepForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0E0E0E]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ActivitySpotlight />
        <ResourceMatcher />
        <FaqAccordion />
        <FirstStepForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
