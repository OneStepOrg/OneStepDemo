'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link';
import { FaLightbulb, FaHandshake, FaTools, FaMapMarkerAlt, FaUsers, FaRocket } from 'react-icons/fa';

const internshipsFeatures = [
  {
    title: 'Real-World Projects',
    description: 'Work on actual company projects and build a portfolio that stands out.',
    icon: <FaLightbulb className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Company Partnerships',
    description: 'Access internships from a network of trusted partner companies.',
    icon: <FaHandshake className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Skill Application',
    description: 'Apply your learning in real scenarios and gain practical experience.',
    icon: <FaTools className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Internship Types',
    description: 'Remote, in-person, paid, unpaid, and by field—find the right fit for you.',
    icon: <FaMapMarkerAlt className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Mentorship & Support',
    description: 'Get guidance from mentors and peers throughout your internship journey.',
    icon: <FaUsers className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Career Growth',
    description: 'Internships designed to help you launch your career with confidence.',
    icon: <FaRocket className="text-4xl text-gray-800 mb-4" />,
  },
];

const InternshipsAboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 mb-5">
              Internships with OneStep
            </h1>
            <p className="text-lg md:text-xl font-inter text-gray-700 mb-7 max-w-3xl leading-relaxed">
              Gain real-world experience, build your network, and launch your career—all through internships designed for you.
            </p>
            <p className="text-md font-inter text-gray-600 italic mb-10">
              Take the next step from learning to doing.
            </p>
            <div className="mt-8">
              <Link
                href="/internships"
                className="bg-gray-800 text-white font-inter font-medium py-3.5 px-7 rounded-lg hover:bg-gray-700 transition-colors border border-gray-800"
              >
                Browse Internships
              </Link>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-10">
              Internship Features & Classifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internshipsFeatures.map((feature) => (
                <div key={feature.title} className="bg-gray-50 p-7 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center gap-4 border border-gray-200">
                  {feature.icon}
                  <h3 className="text-xl font-semibold font-inter text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-inter text-gray-900 mb-8">
              Ready to take the next step?
            </h2>
            <Link
              href="/internships"
              className="bg-gray-800 text-white font-inter font-medium py-3.5 px-7 rounded-lg hover:bg-gray-700 transition-colors border border-gray-800"
            >
              Browse Internships
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InternshipsAboutPage;