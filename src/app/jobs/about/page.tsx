import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const jobsFeatures = [
  {
    title: 'Top Companies',
    description: 'Find jobs from leading companies and startups across industries.',
    image: '/job_offers.svg',
  },
  {
    title: 'Diverse Roles',
    description: 'Explore opportunities in tech, marketing, design, business, and more.',
    image: '/navigator.svg',
  },
  {
    title: 'Remote & Onsite',
    description: 'Choose from remote, hybrid, or onsite roles to fit your lifestyle.',
    image: '/globe.svg',
  },
  {
    title: 'Career Growth',
    description: 'Jobs designed to help you grow and advance your career.',
    image: '/step_onestep.svg',
  },
  {
    title: 'Verified Listings',
    description: 'All jobs are verified for authenticity and quality.',
    image: '/file.svg',
  },
  {
    title: 'Easy Application',
    description: 'Apply to jobs quickly with a streamlined process.',
    image: '/next.svg',
  },
];

const JobsAboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-200 min-h-[60vh] flex items-center justify-center py-12">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-inter text-gray-900 mb-4">
              Jobs with OneStep
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gray-600 mb-6 max-w-2xl">
              Discover your next career move with jobs tailored for you.
            </p>
            <p className="text-lg font-inter text-gray-500 italic mb-8">
              Step into your future with confidence.
            </p>
            <div className="mt-8">
              <Link
                href="/jobs"
                className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-primary transition"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-inter text-gray-900 text-center mb-8">
              Job Features & Classifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {jobsFeatures.map((feature) => (
                <div key={feature.title} className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
                  <Image src={feature.image} alt={feature.title} width={400} height={400} />
                  <h3 className="text-xl font-semibold font-inter text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-inter text-gray-900 mb-6">
              Ready to take the next step?
            </h2>
            <Link
              href="/jobs"
              className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-primary transition"
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