
import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { GEMINI_MODELS } from '../constants';
import { Language } from '../App';

interface PromptStudioProps {
    language: Language;
}

type ResponseType = 'text' | 'image' | 'video';
interface ResponseData {
    type: ResponseType;
    content: string; // text content, or data/blob URL
}

const text = {
    title: { en: 'Prompt Studio', ch: '提示詞工作室' },
    subtitle: { en: 'Paste your prompt, choose a model, and generate a response.', ch: '貼上您的提示詞，選擇一個模型，然後生成回應。' },
    modelLabel: { en: 'Select Model', ch: '選擇模型' },
    promptPlaceholder: { en: 'Paste your prompt here and click Generate...', ch: '在此處貼上您的提示詞，然後點擊生成...' },
    generateButton: { en: 'Generate', ch: '生成' },
    generatingButton: { en: 'Generating...', ch: '生成中...' },
    responseTitle: { en: 'Response', ch: '回應' },
    generatingResponse: { en: 'Generating response...', ch: '正在生成回應...' },
    videoGenerationStart: { en: 'Starting video generation... This may take a few minutes.', ch: '開始生成影片... 這可能需要幾分鐘。' },
    videoGenerationProgress: { en: 'Video generation in progress...', ch: '影片生成中...' },
    videoGenerationFetching: { en: 'Video generated. Fetching file...', ch: '影片已生成。正在獲取檔案...' },
    errorPrompt: { en: 'Please enter a prompt.', ch: '請輸入提示詞。' },
    imageUploadLabel: { en: 'Upload Image for Editing', ch: '上傳圖片進行編輯' },
    errorImageUpload: { en: 'Please upload an image for editing.', ch: '請上傳圖片進行編輯。'},
    errorNoContent: { en: 'The model did not return any content.', ch: '模型未返回任何內容。' },
};

const fileToBase64 = (file: File): Promise<{ mimeType: string, data: string }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            const data = result.split(',')[1];
            resolve({ mimeType: file.type, data });
        };
        reader.onerror = error => reject(error);
    });
};

const PromptStudio: React.FC<PromptStudioProps> = ({ language }) => {
    const [promptText, setPromptText] = useState('');
    const [response, setResponse] = useState<ResponseData[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [selectedModel, setSelectedModel] = useState<string>(GEMINI_MODELS[0]);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleGenerate = async () => {
        if (!promptText.trim()) {
            setError(text.errorPrompt[language]);
            return;
        }
        setIsLoading(true);
        setError(null);
        setResponse(null);
        setLoadingMessage(text.generatingResponse[language]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            if (selectedModel === 'gemini-2.5-flash') {
                const result = await ai.models.generateContent({
                    model: selectedModel,
                    contents: promptText,
                });
                setResponse([{ type: 'text', content: result.text }]);
            } else if (selectedModel === 'imagen-4.0-generate-001') {
                const result = await ai.models.generateImages({
                    model: selectedModel,
                    prompt: promptText,
                    config: { numberOfImages: 1 },
                });
                if (result.generatedImages && result.generatedImages.length > 0) {
                    const base64ImageBytes = result.generatedImages[0].image.imageBytes;
                    const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
                    setResponse([{ type: 'image', content: imageUrl }]);
                } else {
                    throw new Error(`Image generation failed. The model did not return an image. Please try a different prompt.`);
                }
            } else if (selectedModel === 'veo-2.0-generate-001') {
                setLoadingMessage(text.videoGenerationStart[language]);
                let operation = await ai.models.generateVideos({
                    model: selectedModel,
                    prompt: promptText,
                    config: { numberOfVideos: 1 }
                });

                let pollCount = 0;
                while (!operation.done) {
                    pollCount++;
                    setLoadingMessage(`${text.videoGenerationProgress[language]} (Poll #${pollCount})`);
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    operation = await ai.operations.getVideosOperation({ operation });
                }

                if (operation.error) {
                    throw new Error(`Video generation failed: ${operation.error.message || 'Unknown error'}`);
                }

                const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

                if (downloadLink) {
                    setLoadingMessage(text.videoGenerationFetching[language]);
                    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                    if (!videoResponse.ok) throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
                    const blob = await videoResponse.blob();
                    const videoUrl = URL.createObjectURL(blob);
                    setResponse([{ type: 'video', content: videoUrl }]);
                } else {
                    throw new Error("Video generation completed, but no video URI was found.");
                }
            } else if (selectedModel === 'gemini-2.5-flash-image-preview') {
                if (!imageFile) {
                    throw new Error(text.errorImageUpload[language]);
                }
                const { mimeType, data: base64ImageData } = await fileToBase64(imageFile);

                const imagePart = {
                    inlineData: {
                        data: base64ImageData,
                        mimeType: mimeType,
                    },
                };
                const textPart = { text: promptText };

                const result = await ai.models.generateContent({
                    model: selectedModel,
                    contents: {
                        parts: [imagePart, textPart],
                    },
                    config: {
                        responseModalities: [Modality.IMAGE, Modality.TEXT],
                    },
                });

                const responseParts: ResponseData[] = [];
                if (result.candidates?.[0]?.content?.parts) {
                    for (const part of result.candidates[0].content.parts) {
                        if (part.text) {
                            responseParts.push({ type: 'text', content: part.text });
                        } else if (part.inlineData) {
                            const base64ImageBytes = part.inlineData.data;
                            const imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
                            responseParts.push({ type: 'image', content: imageUrl });
                        }
                    }
                }
                
                if (responseParts.length === 0) {
                     throw new Error(text.errorNoContent[language]);
                }
                setResponse(responseParts);
            }

        } catch (e) {
            console.error(e);
            setError(e instanceof Error ? e.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };
    
    // Reset image file when model changes away from image editing model
    React.useEffect(() => {
        if (selectedModel !== 'gemini-2.5-flash-image-preview') {
            setImageFile(null);
        }
    }, [selectedModel]);

    return (
        <main className="h-full p-6 lg:p-8 overflow-y-auto text-zinc-900">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">{text.title[language]}</h1>
                    <p className="text-zinc-500">{text.subtitle[language]}</p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-lg p-4 mb-6">
                    <label htmlFor="model-select" className="block text-sm font-medium text-zinc-700 mb-2">
                        {text.modelLabel[language]}
                    </label>
                    <select
                        id="model-select"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                    >
                        {GEMINI_MODELS.map(model => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                    </select>
                </div>
                
                {selectedModel === 'gemini-2.5-flash-image-preview' && (
                    <div className="bg-white border border-zinc-200 rounded-lg p-4 mb-6">
                        <label htmlFor="image-upload" className="block text-sm font-medium text-zinc-700 mb-2">
                            {text.imageUploadLabel[language]}
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                            className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                        />
                        {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Preview" className="mt-4 max-h-48 rounded-md" />}
                    </div>
                )}


                <div className="mb-6">
                    <textarea
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder={text.promptPlaceholder[language]}
                        className="w-full p-4 bg-white border border-zinc-200 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base font-mono"
                        rows={10}
                        aria-label="Prompt Input"
                    />
                </div>

                <div className="flex justify-end mb-6">
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 flex items-center"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {text.generatingButton[language]}
                            </>
                        ) : text.generateButton[language]}
                    </button>
                </div>

                {(response || error || isLoading) && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-3">{text.responseTitle[language]}</h2>
                        <div className="bg-white border border-zinc-200 rounded-lg p-4 text-base font-mono min-h-[150px]">
                            {isLoading && <p className="text-zinc-500 text-center">{loadingMessage || text.generatingResponse[language]}</p>}
                            {error && <p className="text-red-500">{error}</p>}
                            {response && response.map((res, index) => {
                                switch (res.type) {
                                    case 'text':
                                        return <p key={index} className="text-zinc-800 whitespace-pre-wrap mb-4">{res.content}</p>;
                                    case 'image':
                                        return (
                                            <div key={index} className="flex justify-center mb-4">
                                                <img src={res.content} alt="Generated" className="max-w-full max-h-[512px] rounded-md" />
                                            </div>
                                        );
                                    case 'video':
                                        return (
                                            <div key={index} className="flex justify-center mb-4">
                                                <video src={res.content} controls className="max-w-full max-h-[512px] rounded-md" />
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default PromptStudio;