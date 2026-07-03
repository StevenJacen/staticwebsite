import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import { Home } from './components/Home';
import { TechnologyPage } from './components/TechnologyPage';
import { NewsPage } from './components/NewsPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
