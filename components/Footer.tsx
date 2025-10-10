import React from 'react';
import { Language } from '../App';

interface FooterProps {
    language: Language;
}

const text = {
    source: { en: 'Prompts sourced from', ch: '提示詞來源' },
    original: { en: 'Original Content', ch: '原始內容' }
};

const Footer: React.FC<FooterProps> = ({ language }) => {
    return (
        <footer className="bg-zinc-100 border-t border-zinc-200 p-4 text-center text-xs text-zinc-500">
            <p>
                {text.source[language]}:{' '}
                <a
                    href="https://www.bnext.com.tw/article/84622/chat-gpt-prompt-pack-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 hover:underline"
                >
                    Business Next
                </a>
                {' & '}
                <a
                    href="https://academy.openai.com/home/clubs/work-users-ynjqu/tags/prompt-packs-6849a0f98c613939acef841c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 hover:underline"
                >
                    OpenAI Academy ({text.original[language]})
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
