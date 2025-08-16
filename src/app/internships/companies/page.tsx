import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const companies = [
  'TechNova',
  'MarketGenius',
  'DataWiz',
  'Designify',
  'BizInsights',
];

const InternshipCompaniesPage = () => (
  <>
    <Header />
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
          Browse Companies Offering Internships
        </h1>
        <ul className="grid gap-6">
          {companies.map((company) => (
            <li key={company}>
              <Link href={`/internships/companies/${company.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-lg font-medium text-gray-800 hover:text-primary border border-gray-200 hover:border-primary">
                {company}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default InternshipCompaniesPage; 