import React from 'react';

interface SVGImageProps {
  width: number;
  height: number;
  color: string;
  text?: string;
}

const SVGImage: React.FC<SVGImageProps> = ({ width, height, color, text }) => {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">
        ${text || 'Image'}
      </text>
    </svg>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default SVGImage;
