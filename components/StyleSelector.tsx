
import React from 'react';
import type { Style } from '../types';

interface StyleSelectorProps {
  styles: Style[];
  selectedStyle: Style;
  onSelect: (style: Style) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, selectedStyle, onSelect }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-200">Choose Style</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onSelect(style)}
            className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-purple ${
              selectedStyle.id === style.id ? 'border-brand-purple' : 'border-dark-border hover:border-brand-purple/70'
            }`}
          >
            <img src={style.previewImage} alt={style.name} className="w-full h-20 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-1.5">
              <span className="text-white text-xs font-semibold leading-tight">{style.name}</span>
            </div>
            {selectedStyle.id === style.id && (
              <div className="absolute inset-0 bg-brand-purple bg-opacity-50"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
