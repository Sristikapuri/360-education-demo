import React from 'react';

const ImageTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Basic Image Test</h1>
      
      <h2 className="text-lg font-semibold mb-4">Test 1: Basic Img Tag</h2>
      <img 
        src="https://i.imgur.com/360education1.jpg" 
        alt="Education test" 
        style={{border: '2px solid red', width: '200px', height: '150px'}}
      />
      
      <h2 className="text-lg font-semibold mb-4">Test 2: Different Image Service</h2>
      <img 
        src="https://via.placeholder.com/300x200/FFD700/000000?text=Placeholder" 
        alt="Placeholder test" 
        style={{border: '2px solid green', width: '200px', height: '150px'}}
      />
      
      <h2 className="text-lg font-semibold mb-4">Test 3: Local File</h2>
      <img 
        src="/test-image.jpg" 
        alt="Local test" 
        style={{border: '2px solid blue', width: '200px', height: '150px'}}
      />
    </div>
  );
};

export default ImageTest;
