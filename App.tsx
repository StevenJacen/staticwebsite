import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBlock } from './components/FeatureBlock';
import { Footer } from './components/Footer';
import { FeatureItem } from './types';

// Mock data based on the sketch structure and Lovot theme
const features: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Emotional Bond',
    description: [
      'Our technology focuses on the subtle non-verbal cues that build trust.',
      'Through soft gestures and eye contact, we bridge the gap between machine and life.',
      'It’s not just about function; it’s about the feeling of presence.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=1',
    imageAlt: 'Robot interacting with human',
    reverse: false // Image left, text right (as per sketch top section)
  },
  {
    id: 'f2',
    title: 'Soft Robotics',
    description: [
      'Designed to be held, hugged, and loved.',
      'Advanced sensors monitor touch, temperature, and posture to respond naturally to your embrace.',
      'Safety and comfort are at the core of our hardware design philosophy.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=2',
    imageAlt: 'Soft texture close up',
    reverse: true // Text left, image right (as per sketch bottom section)
  },
  {
    id: 'f3',
    title: 'Daily Rhythm',
    description: [
      'Wake up together, relax together.',
      'Our AI adapts to your lifestyle, learning your patterns to become the perfect companion.',
      'Experience a life where technology supports your emotional well-being seamlessly.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=3',
    imageAlt: 'Lifestyle scene',
    reverse: false
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="technology" className="flex flex-col">
          {features.map((feature) => (
            <FeatureBlock key={feature.id} item={feature} />
          ))}
        </div>
        
        {/* Additional "About" text section to match the sketch's bottom simple text feel */}
        <section id="about" className="py-20 bg-blue-50 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">About HeartMemo</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    We believe that the future of technology is not just about intelligence, but about warmth. 
                    Inspired by the pure connection found in nature, we strive to build a future where robots 
                    and humans coexist in harmony.
                </p>
                <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;