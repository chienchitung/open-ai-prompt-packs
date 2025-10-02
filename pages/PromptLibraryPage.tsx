import React, { useState } from 'react';
import { PROMPT_CATEGORIES } from '../constants';
import Sidebar from '../components/Sidebar';
import PromptCard from '../components/PromptCard';
import { Language } from '../App';

interface PromptLibraryPageProps {
    language: Language;
}

const PromptLibraryPage: React.FC<PromptLibraryPageProps> = ({ language }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const selectedCategory = PROMPT_CATEGORIES[selectedCategoryIndex];

    const getTitle = (fullTitle: string): string => {
        const parts = fullTitle.split(/\s*\(/);
        if (parts.length < 2) return fullTitle;
        const chTitle = parts[0].trim();
        const enTitle = parts[1].replace(')', '').trim();
        return language === 'ch' ? chTitle : enTitle;
    };

    return (
        <div className="flex h-full">
            <Sidebar
                categories={PROMPT_CATEGORIES}
                selectedCategoryIndex={selectedCategoryIndex}
                onSelectCategory={setSelectedCategoryIndex}
                language={language}
            />
            <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-zinc-900 mb-6">{getTitle(selectedCategory.title)}</h1>
                    {selectedCategory.subCategories.map((subCategory, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="text-2xl font-semibold text-emerald-600 mb-4 pb-2 border-b border-zinc-200">
                                {getTitle(subCategory.title)}
                            </h2>
                            <div className="space-y-6">
                                {subCategory.prompts.map((prompt, pIndex) => (
                                    <PromptCard key={pIndex} prompt={prompt} language={language} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PromptLibraryPage;