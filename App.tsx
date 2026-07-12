import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import { Home } from './components/Home';
import { TechnologyPage } from './components/TechnologyPage';
import { NewsPage } from './components/NewsPage';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { SolutionsPage } from './components/SolutionsPage';
import { SupportPage } from './components/SupportPage';
import { CooperationPage } from './components/CooperationPage';
import { ForumPage } from './components/ForumPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
