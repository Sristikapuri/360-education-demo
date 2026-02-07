import React from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  width, 
  height, 
  text = "Image", 
  bgColor = "#FFD700", 
  textColor = "#000000" 
}) => {
  return (
    <div 
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '8px'
      }}
    >
      {text}
    </div>
  );
};

export default ImagePlaceholder;
