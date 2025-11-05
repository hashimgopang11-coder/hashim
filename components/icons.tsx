
import React from 'react';

export const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="3" />
    <path d="M6.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
    <path d="M18.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
    <path d="M12.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
    <path d="M12 2a10 10 0 0 0-9.3 14.2l1.5-1.5a8 8 0 0 1 13.6-6.9l1.5 1.5A10 10 0 0 0 12 2" />
    <path d="M22 12c0 4.2-2.8 7.9-6.8 9.3l-1.5-1.5C16.2 18.6 18 15.6 18 12" />
    <path d="M3.7 19.8l1.5-1.5C3.8 17.4 2 14.4 2 11c0-1.5.3-2.9.8-4.2l-1.5-1.5A10 10 0 0 0 3.7 19.8" />
  </svg>
);

export const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );

export const AspectRatioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="18" height="12" x="3" y="6" rx="2" />
        <path d="m3 14 7.5-7.5" />
        <path d="m13.5 18 7.5-7.5" />
    </svg>
);

export const VariationsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M13 3h5a2 2 0 0 1 2 2v5" />
        <path d="M3 13v5a2 2 0 0 0 2 2h5" />
    </svg>
);
