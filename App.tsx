import React, { useState } from 'react';
import Header from './components/Header';
import PromptLibraryPage from './pages/PromptLibraryPage';
import PromptStudio from './pages/PromptStudio';
import Footer from './components/Footer';

export type Page = 'library' | 'studio';
export type Language = 'en' | 'ch';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('library');
  const [language, setLanguage] = useState<Language>('ch');

  return (
    <div className="flex flex-col h-screen font-sans bg-zinc-50">
      <Header 
        currentPage={page} 
        setPage={setPage} 
        language={language}
        setLanguage={setLanguage}
      />
      <main className="flex-1 min-h-0">
        {page === 'library' && <PromptLibraryPage language={language} />}
        {page === 'studio' && <PromptStudio language={language} />}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;