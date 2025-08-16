import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const categories = [
  'Web Development',
  'Marketing',
  'Data Science',
  'Design',
  'Business',
];

const InternshipCategoriesPage = () => (
  <>
    <Header />
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
          Browse Internship Categories
        </h1>
        <ul className="grid gap-6">
          {categories.map((cat) => (
            <li key={cat}>
              <Link href={`/internships/categories/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-lg font-medium text-gray-800 hover:text-primary border border-gray-200 hover:border-primary">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default InternshipCategoriesPage; 