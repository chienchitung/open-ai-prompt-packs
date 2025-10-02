import React from 'react';
import { PromptCategory } from '../types';
import { Language } from '../App';

interface SidebarProps {
  categories: PromptCategory[];
  selectedCategoryIndex: number;
  onSelectCategory: (index: number) => void;
  language: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategoryIndex, onSelectCategory, language }) => {
  const getTitle = (fullTitle: string): string => {
    const parts = fullTitle.split(/\s*\(/);
    if (parts.length < 2) return fullTitle;
    const chTitle = parts[0].trim();
    const enTitle = parts[1].replace(')', '').trim();
    return language === 'ch' ? chTitle : enTitle;
  };

  return (
    <aside className="w-72 bg-zinc-100 p-4 overflow-y-auto border-r border-zinc-200 hidden md:block">
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-1">
              <button
                onClick={() => onSelectCategory(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  selectedCategoryIndex === index
                    ? 'bg-emerald-600 text-white'
                    : 'text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
                aria-current={selectedCategoryIndex === index ? 'page' : undefined}
              >
                {getTitle(category.title)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;