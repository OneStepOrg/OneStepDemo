import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold font-inter text-gray-900 mb-4">
          OneStep Toward a Better You
        </h1>
        {/* Subtext */}
        <p className="text-xl md:text-2xl font-inter text-gray-600 mb-6 max-w-2xl">
          Learn in-demand skills and gain internship experience — all in one place.
        </p>
        {/* Tagline */}
        <p className="text-lg font-inter text-gray-500 italic mb-8">
          All it takes is a step toward change.
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#waitlist"
            className="bg-primary text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-primary transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#learn-more"
            className="border border-primary text-primary font-inter font-medium py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Learn More
          </a>
        </div>
        {/* Visual Placeholder */}
        <div className="mt-12">
          <div className="w-full  py-10 rounded-lg flex items-center justify-center">
            <Image src="/step_onestep.svg" alt="onestep-illustration" width={400} height={400}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;