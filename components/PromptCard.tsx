
import React, { useState } from 'react';
import { PromptItem } from '../types';
import { Language } from '../App';

interface PromptCardProps {
  prompt: PromptItem;
  language: Language;
}

const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const text = {
    chPrompt: { en: 'Chinese Prompt', ch: '中文提示詞' },
    enPrompt: { en: 'English Prompt', ch: '英文提示詞' },
    copy: { en: 'Copy', ch: '複製' },
    copied: { en: 'Copied!', ch: '已複製!' },
    openInChatGPT: { en: 'Open in ChatGPT', ch: '在 ChatGPT 中開啟' },
};

const PromptCard: React.FC<PromptCardProps> = ({ prompt, language }) => {
    const [copied, setCopied] = useState<'ch' | 'en' | null>(null);

    const getScenario = (fullScenario: string): string => {
        const parts = fullScenario.split(/\s*\(/);
        if (parts.length < 2) return fullScenario;
        const chScenario = parts[0].trim();
        const enScenario = parts[1].replace(')', '').trim();
        return language === 'ch' ? chScenario : enScenario;
    };


    const handleCopy = (text: string, type: 'ch' | 'en') => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(type);
            setTimeout(() => setCopied(null), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-200">
            <div className="p-4 bg-zinc-50 border-b border-zinc-200">
                <h3 className="font-semibold text-lg text-zinc-800">{getScenario(prompt.scenario)}</h3>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Chinese Prompt */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-bold text-zinc-500">{text.chPrompt[language]}</h4>
                        <div className="flex items-center space-x-2">
                            <a
                                href={`https://chat.openai.com/?prompt=${encodeURIComponent(prompt.chinesePrompt)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md transition-all duration-200"
                                aria-label={text.openInChatGPT[language]}
                                title={text.openInChatGPT[language]}
                            >
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                            <button 
                                onClick={() => handleCopy(prompt.chinesePrompt, 'ch')}
                                className="flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md transition-all duration-200 text-xs"
                            >
                                {copied === 'ch' ? <CheckIcon className="w-4 h-4 mr-1 text-emerald-500" /> : <CopyIcon className="w-4 h-4 mr-1" />}
                                {copied === 'ch' ? text.copied[language] : text.copy[language]}
                            </button>
                        </div>
                    </div>
                    <div className="bg-zinc-100 p-3 rounded-md text-zinc-700 text-sm whitespace-pre-wrap flex-grow font-mono">
                        {prompt.chinesePrompt}
                    </div>
                </div>

                {/* English Prompt */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-bold text-zinc-500">{text.enPrompt[language]}</h4>
                        <div className="flex items-center space-x-2">
                             <a
                                href={`https://chat.openai.com/?prompt=${encodeURIComponent(prompt.englishPrompt)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md transition-all duration-200"
                                aria-label={text.openInChatGPT[language]}
                                title={text.openInChatGPT[language]}
                            >
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                            <button 
                                onClick={() => handleCopy(prompt.englishPrompt, 'en')}
                                className="flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md transition-all duration-200 text-xs"
                            >
                                {copied === 'en' ? <CheckIcon className="w-4 h-4 mr-1 text-emerald-500" /> : <CopyIcon className="w-4 h-4 mr-1" />}
                                {copied === 'en' ? text.copied[language] : text.copy[language]}
                            </button>
                        </div>
                    </div>
                    <div className="bg-zinc-100 p-3 rounded-md text-zinc-700 text-sm whitespace-pre-wrap flex-grow font-mono">
                        {prompt.englishPrompt}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptCard;
