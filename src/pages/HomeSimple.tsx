import React from 'react';

const HomeSimple: React.FC = () => {
  return (
    <div className="min-h-screen bg-light">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-16 text-center">Simple Image Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div style={{width: '100%', height: '200px', backgroundColor: '#FFD700', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                YELLOW BOX
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div style={{width: '100%', height: '200px', backgroundColor: '#1E90FF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                BLUE BOX
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div style={{width: '100%', height: '200px', backgroundColor: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                GREEN BOX
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSimple;
