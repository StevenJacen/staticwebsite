import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { FeatureBlock } from './components/FeatureBlock';
import { Footer } from './components/Footer';
import { FeatureItem } from './types';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  // Construct features from translation context to ensure reactivity
  const features: FeatureItem[] = [
    {
      id: 'technology',
      title: t.features.f1.title,
      description: t.features.f1.desc,
      imageSrc: 'https://images.unsplash.com/photo-1535378437323-9555f3e7f6aa?q=80&w=2000&auto=format&fit=crop', // Robot Eye/Face close up
      imageAlt: 'AI Understanding',
      theme: 'gray',
      buttonText: t.features.f1.button
    },
    {
      id: 'fashion',
      title: t.features.f2.title,
      description: t.features.f2.desc,
      imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop', // Robot with fashion/human context
      imageAlt: 'Resonance',
      theme: 'teal',
      buttonText: t.features.f2.button
    },
    {
      id: 'store',
      title: t.features.f3.title,
      description: t.features.f3.desc,
      imageSrc: 'https://images.unsplash.com/photo-1546776310-51d68279c009?q=80&w=1500&auto=format&fit=crop', // Robot peeking or cute
      imageAlt: 'Share Love',
      theme: 'beige',
      buttonText: t.features.f3.button
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar />
      
      <main>
        <Hero />
        <Vision />
        
        <div id="features" className="flex flex-col">
          {features.map((feature) => (
            <FeatureBlock key={feature.id} item={feature} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;