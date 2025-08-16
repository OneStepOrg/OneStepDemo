import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const locations = [
  'Remote',
  'Bangalore',
  'Delhi',
  'Mumbai',
];

const InternshipLocationsPage = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 sm:px-6 max-w-3xl py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Browse Internship Locations</h1>
      <div className="grid grid-cols-1 gap-4">
        {locations.map((loc) => (
          <Link key={loc} href={`/internships/locations/${loc.toLowerCase().replace(/\s+/g, '-')}`} className="block">
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 text-lg font-medium text-gray-800 text-center">{loc}</div>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default InternshipLocationsPage;