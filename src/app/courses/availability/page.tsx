import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const availabilities = [
  'Self-Paced',
  'Part-Time',
  'Full-Time',
  'Live Online',
  'On-Campus',
];

const CourseAvailabilityPage = () => (
  <>
    <Header />
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
          Browse Course Availability
        </h1>
        <ul className="grid gap-6">
          {availabilities.map((avail) => (
            <li key={avail}>
              <Link href={`/courses/availability/${avail.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-lg font-medium text-gray-800 hover:text-primary border border-gray-200 hover:border-primary">
                {avail}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default CourseAvailabilityPage; 