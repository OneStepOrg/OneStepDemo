import React from 'react';

const InternshipHeroSection: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Find your dream internship</h1>
        <p className="text-xl mb-8">Search and apply for the best internships across various companies and locations.</p>
        <div className="max-w-md mx-auto">
          {/* Placeholder for search bar */}
          <input type="text" placeholder="Search for internships..." className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default InternshipHeroSection;