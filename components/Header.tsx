
import React from 'react';
import { PaletteIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center h-16 px-6 bg-dark-card border-b border-dark-border flex-shrink-0">
      <div className="flex items-center gap-3">
        <PaletteIcon className="w-8 h-8 text-brand-purple" />
        <h1 className="text-xl font-bold text-white">AI Persona Studio</h1>
      </div>
    </header>
  );
};
