
import React from 'react';
import type { Settings, Style, AspectRatio } from '../types';
import { StyleSelector } from './StyleSelector';
import { UploadIcon, AspectRatioIcon, VariationsIcon } from './icons';

interface SettingsPanelProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
  onGenerate: () => void;
  isLoading: boolean;
  styles: Style[];
  selectedStyle: Style;
  setSelectedStyle: (style: Style) => void;
}

const aspectRatios: AspectRatio[] = ['1:1', '4:5', '16:9'];

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  prompt,
  setPrompt,
  settings,
  setSettings,
  onGenerate,
  isLoading,
  styles,
  selectedStyle,
  setSelectedStyle,
}) => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-200">Describe your avatar</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A stoic warrior with a glowing sword..."
          className="w-full h-28 p-3 bg-dark-bg border border-dark-border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition"
        />
        <button
            disabled
            className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 bg-dark-bg border border-dashed border-dark-border rounded-lg cursor-not-allowed opacity-60"
        >
            <UploadIcon className="w-4 h-4" />
            Upload a selfie (coming soon)
        </button>
      </div>

      <StyleSelector styles={styles} selectedStyle={selectedStyle} onSelect={setSelectedStyle} />

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-200">Generation Settings</h3>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                    <AspectRatioIcon className="w-5 h-5 text-gray-400" />
                    <span>Aspect Ratio</span>
                </div>
                <div className="flex gap-2">
                    {aspectRatios.map((ratio) => (
                        <button
                            key={ratio}
                            onClick={() => setSettings({ ...settings, aspectRatio: ratio })}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                                settings.aspectRatio === ratio ? 'bg-brand-purple text-white' : 'bg-dark-bg hover:bg-dark-border'
                            }`}
                        >
                            {ratio}
                        </button>
                    ))}
                </div>
            </div>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                    <VariationsIcon className="w-5 h-5 text-gray-400" />
                    <span>Variations</span>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        type="range"
                        min="1"
                        max="4"
                        value={settings.variations}
                        onChange={(e) => setSettings({ ...settings, variations: parseInt(e.target.value, 10) })}
                        className="w-24 h-2 bg-dark-border rounded-lg appearance-none cursor-pointer accent-brand-purple"
                    />
                    <span className="w-4 text-center text-sm font-medium">{settings.variations}</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className="pt-2 sticky bottom-0 bg-dark-card pb-4">
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full h-12 px-6 font-semibold text-white bg-brand-purple rounded-lg hover:bg-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-purple disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </div>
          ) : 'Generate Avatar'}
        </button>
      </div>
    </div>
  );
};
