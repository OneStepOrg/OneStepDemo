import React from 'react';
import Image from 'next/image';

const WhyOneStep = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold font-inter text-gray-900 text-center mb-8">
          Why We&apos;re Building OneStep
        </h2>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
          <Image src="/sorting_thoughts.svg" alt="onestep-illustration" width={400} height={400}/>
          <h3 className="text-xl font-semibold font-inter text-gray-900">
              No More “Learn and Forget”
            </h3>
            <p className="text-gray-600 font-inter">
              Our courses lead to action, not just theory.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
            <Image src="/job_offers.svg" alt="onestep-illustration" width={400} height={400}/>
            <h3 className="text-xl font-semibold font-inter text-gray-900">
              Learning Meets Opportunity
            </h3>
            <p className="text-gray-600 font-inter">
              Internships are baked into your journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
            <Image src="/youtube_tutorial.svg" alt="onestep-illustration" width={400} height={400}/>
            <h3 className="text-xl font-semibold font-inter text-gray-900">
              No Guesswork
            </h3>
            <p className="text-gray-600 font-inter">
              We guide you, step by step, to success.
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#waitlist"
            className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Join Early & Help Shape the Platform
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyOneStep;