import React from 'react';

const TestImages: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Image Test Page</h1>
      
      <h2 className="text-lg font-semibold mb-4">Test 1: Simple Colored Div</h2>
      <div style={{width: '300px', height: '200px', backgroundColor: '#FFD700', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
        Yellow Box - Should Work
      </div>
      
      <h2 className="text-lg font-semibold mb-4 mt-8">Test 2: Tailwind Classes</h2>
      <div className="w-72 h-48 bg-blue-600 flex items-center justify-center text-white font-bold">
        Blue Box - Tailwind Classes
      </div>
      
      <h2 className="text-lg font-semibold mb-4 mt-8">Test 3: External Image</h2>
      <img 
        src="https://picsum.photos/seed/test123/300/200" 
        alt="Test image" 
        style={{border: '2px solid red'}}
      />
      
      <h2 className="text-lg font-semibold mb-4 mt-8">Test 4: Placeholder Image</h2>
      <img 
        src="https://via.placeholder.com/300x200/FFD700/000000?text=Placeholder" 
        alt="Placeholder image" 
        style={{border: '2px solid green'}}
      />
    </div>
  );
};

export default TestImages;
