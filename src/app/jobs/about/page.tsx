'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaBriefcase, FaGlobe, FaRocket, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const jobsFeatures = [
  {
    title: 'Top Companies',
    description: 'Find jobs from leading companies and startups across industries.',
    icon: <FaBuilding className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Diverse Roles',
    description: 'Explore opportunities in tech, marketing, design, business, and more.',
    icon: <FaBriefcase className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Remote & Onsite',
    description: 'Choose from remote, hybrid, or onsite roles to fit your lifestyle.',
    icon: <FaGlobe className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Career Growth',
    description: 'Jobs designed to help you grow and advance your career.',
    icon: <FaRocket className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Verified Listings',
    description: 'All jobs are verified for authenticity and quality.',
    icon: <FaCheckCircle className="text-4xl text-gray-800 mb-4" />,
  },
  {
    title: 'Easy Application',
    description: 'Apply to jobs quickly with a streamlined process.',
    icon: <FaPaperPlane className="text-4xl text-gray-800 mb-4" />,
  },
];

const JobsAboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-gray-900 mb-5">
              Jobs with OneStep
            </h1>
            <p className="text-lg md:text-xl font-inter text-gray-700 mb-7 max-w-3xl leading-relaxed">
              Discover your next career move with jobs tailored for you.
            </p>
            <p className="text-md font-inter text-gray-600 italic mb-10">
              Step into your future with confidence.
            </p>
            <div className="mt-8">
              <Link
                href="/jobs"
                className="bg-gray-800 text-white font-inter font-medium py-3.5 px-7 rounded-lg hover:bg-gray-700 transition-colors border border-gray-800"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-10">
              Job Features & Classifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobsFeatures.map((feature) => (
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
              href="/jobs"
              className="bg-gray-800 text-white font-inter font-medium py-3.5 px-7 rounded-lg hover:bg-gray-700 transition-colors border border-gray-800"
            >
              Browse Jobs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JobsAboutPage;