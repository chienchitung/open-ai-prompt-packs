import React from 'react';
import { Page, Language } from '../App';

interface HeaderProps {
    currentPage: Page;
    setPage: (page: Page) => void;
    language: Language;
    setLanguage: (language: Language) => void;
}

const text = {
    library: { en: 'Prompt Library', ch: '提示詞目錄' },
    studio: { en: 'Prompt Studio', ch: '提示詞工作室' },
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage, language, setLanguage }) => {
  const navButtonClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClasses = "bg-zinc-200 text-zinc-900";
  const inactiveClasses = "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900";

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ch' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-zinc-200 z-10">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
                <path d="M5 3v4"/>
                <path d="M19 17v4"/>
                <path d="M3 5h4"/>
                <path d="M17 19h4"/>
            </svg>
        </div>
        <h1 className="text-2xl font-bold text-zinc-900">Open AI Prompt Packs</h1>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="flex items-center space-x-2 bg-zinc-100 p-1 rounded-lg">
          <button
            onClick={() => setPage('library')}
            className={`${navButtonClasses} ${currentPage === 'library' ? activeClasses : inactiveClasses}`}
            aria-current={currentPage === 'library' ? 'page' : undefined}
          >
            {text.library[language]}
          </button>
          <button
            onClick={() => setPage('studio')}
            className={`${navButtonClasses} ${currentPage === 'studio' ? activeClasses : inactiveClasses}`}
            aria-current={currentPage === 'studio' ? 'page' : undefined}
          >
            {text.studio[language]}
          </button>
        </nav>
        <button
          onClick={toggleLanguage}
          className="px-3 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-sm font-semibold rounded-lg transition-colors"
          aria-label="Toggle language"
        >
          {language === 'en' ? '繁' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header;