import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const internshipsFeatures = [
  {
    title: 'Real-World Projects',
    description: 'Work on actual company projects and build a portfolio that stands out.',
    image: '/job_hunt.svg',
  },
  {
    title: 'Company Partnerships',
    description: 'Access internships from a network of trusted partner companies.',
    image: '/job_offers.svg',
  },
  {
    title: 'Skill Application',
    description: 'Apply your learning in real scenarios and gain practical experience.',
    image: '/learning.svg',
  },
  {
    title: 'Internship Types',
    description: 'Remote, in-person, paid, unpaid, and by field—find the right fit for you.',
    image: '/navigator.svg',
  },
  {
    title: 'Mentorship & Support',
    description: 'Get guidance from mentors and peers throughout your internship journey.',
    image: '/community.svg',
  },
  {
    title: 'Career Growth',
    description: 'Internships designed to help you launch your career with confidence.',
    image: '/step_onestep.svg',
  },
];

const InternshipsAboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-200 min-h-[60vh] flex items-center justify-center py-12">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-inter text-gray-900 mb-4">
              Internships with OneStep
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gray-600 mb-6 max-w-2xl">
              Gain real-world experience, build your network, and launch your career—all through internships designed for you.
            </p>
            <p className="text-lg font-inter text-gray-500 italic mb-8">
              Take the next step from learning to doing.
            </p>
            <div className="mt-8">
              <Link
                href="/internships"
                className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-primary transition"
              >
                Browse Internships
              </Link>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-inter text-gray-900 text-center mb-8">
              Internship Features & Classifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {internshipsFeatures.map((feature) => (
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
              href="/internships"
              className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-primary transition"
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