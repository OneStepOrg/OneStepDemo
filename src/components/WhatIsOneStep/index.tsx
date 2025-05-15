import React from 'react';
import Image from 'next/image';

const WhatIsOneStep = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold font-inter text-gray-900 text-center mb-8">
          What is OneStep?
        </h2>
        {/* Description */}
        <p className="text-lg font-inter text-gray-600 text-center max-w-3xl mx-auto mb-12">
          OneStep is a learning platform that combines structured courses with real internship experiences — helping students build skills and launch careers.
        </p>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
            <Image src="/navigator.svg" alt="onestep-illustration" width={400} height={400}/>
            <h3 className="text-xl font-semibold font-inter text-gray-900">
              Skill-Building Roadmaps
            </h3>
            <p className="text-gray-600 font-inter">
              Guided paths to master in-demand skills with clear milestones.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
            <Image src="/world_guide.svg" alt="onestep-illustration" width={400} height={400}/>
            <h3 className="text-xl font-semibold font-inter text-gray-900 mb-2">
              Real-World Internships
            </h3>
            <p className="text-gray-600 font-inter">
              Apply your skills through hands-on projects with real companies.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col justify-center gap-4">
            <Image src="/community.svg" alt="onestep-illustration" width={400} height={400}/>
            <h3 className="text-xl font-semibold font-inter text-gray-900 mb-2">
              Supportive Community
            </h3>
            <p className="text-gray-600 font-inter">
              Connect with mentors and peers to stay motivated and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsOneStep;