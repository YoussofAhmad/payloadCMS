import React from 'react';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <button 
          onClick={() => window.history.pushState({}, '', '/')}
          className="text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          Blog Platform
        </button>
      </div>
    </nav>
    <main className="max-w-6xl mx-auto px-4 py-8">
      {children}
    </main>
  </div>
);

export default Layout;