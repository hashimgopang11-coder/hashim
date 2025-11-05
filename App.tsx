
import React, { useState, useCallback } from 'react';
import { SettingsPanel } from './components/SettingsPanel';
import { ImageGallery } from './components/ImageGallery';
import { Header } from './components/Header';
import { generateAvatars } from './services/geminiService';
import type { Settings, Style } from './types';
import { STYLES } from './constants';

function App() {
  const [prompt, setPrompt] = useState<string>('A confident female CEO in a futuristic cyberpunk city, ultra-realistic lighting, portrait style.');
  const [selectedStyle, setSelectedStyle] = useState<Style>(STYLES[4]);
  const [settings, setSettings] = useState<Settings>({
    aspectRatio: '1:1',
    variations: 2,
  });
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || !selectedStyle) {
      setError('Please enter a prompt and select a style.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
      const images = await generateAvatars(prompt, selectedStyle, settings);
      setGeneratedImages(images);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate images: ${errorMessage}. Please check your API key and try again.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, selectedStyle, settings]);


  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-64px)]">
        <aside className="w-full lg:w-[450px] lg:flex-shrink-0 bg-dark-card border-r border-dark-border lg:overflow-y-auto">
          <SettingsPanel
            prompt={prompt}
            setPrompt={setPrompt}
            settings={settings}
            setSettings={setSettings}
            onGenerate={handleGenerate}
            isLoading={isLoading}
            styles={STYLES}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </aside>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <ImageGallery 
            images={generatedImages} 
            isLoading={isLoading}
            error={error}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
