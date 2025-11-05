
import React from 'react';
import { DownloadIcon } from './icons';

interface ImageGalleryProps {
  images: string[];
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
    <div className="w-full h-full bg-dark-card rounded-lg animate-pulse"></div>
);

const Placeholder: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-dark-card rounded-lg border-2 border-dashed border-dark-border">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <h3 className="text-xl font-semibold text-white">Your generated avatars will appear here</h3>
    <p className="mt-2 text-sm text-gray-400">Describe your vision, pick a style, and click 'Generate' to begin.</p>
  </div>
);


export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isLoading, error }) => {
  const handleDownload = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `persona-studio-avatar-${index + 1}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
         <LoadingSkeleton />
         <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-red-900/20 text-red-300 border border-red-500/50 rounded-lg">
        <p className="text-center">{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return <Placeholder />;
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in`}>
      {images.map((img, index) => (
        <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
          <img src={img} alt={`Generated avatar ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => handleDownload(img, index)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white"
            >
              <DownloadIcon className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
