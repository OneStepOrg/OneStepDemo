import React from 'react';

const SneakPeek = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold font-inter text-gray-900 text-center mb-8">
          What You'll Learn
        </h2>
        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition relative flex flex-col gap-2">
            <div className='flex justify-flex-end mb-2'>
                <p className="absolute top-4 right-4 bg-primary text-white text-xs font-inter px-2 py-1 rounded">
                Launching Soon
                </p>
            </div>
            <h3 className="text-xl font-semibold font-inter text-gray-900 m-0">
              Frontend Development
            </h3>
            <p className="text-gray-600 font-inter m-0">
              8-week roadmap + internship to build real-world apps.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition relative flex flex-col gap-2">
            <div className='flex justify-flex-end mb-2'>
                <p className="absolute top-4 right-4 bg-primary text-white text-xs font-inter px-2 py-1 rounded">
                Waitlist Open
                </p>
            </div>
            <h3 className="text-xl font-semibold font-inter text-gray-900 m-0">
              UI/UX Design
            </h3>
            <p className="text-gray-600 font-inter m-0">
              Learn design tools + build a portfolio-worthy case study.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-sm hover:shadow-md transition relative flex flex-col gap-2">
            <div className='flex justify-flex-end mb-2'>
                <p className="absolute top-4 right-4 bg-primary text-white text-xs font-inter px-2 py-1 rounded">
                Launching Soon
                </p>
            </div>
            <h3 className="text-xl font-semibold font-inter text-gray-900 m-0">
              Marketing Foundations
            </h3>
            <p className="text-gray-600 font-inter m-0">
              Work on a real brand campaign project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;