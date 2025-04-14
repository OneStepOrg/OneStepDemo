import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold font-inter text-white mb-4">
          Be Part of the First Wave
        </h2>
        {/* Subtext */}
        <p className="text-lg font-inter text-gray-100 max-w-2xl mx-auto mb-8">
          We&apos;re launching soon. Join our waitlist and take the first step with us.
        </p>
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-white text-primary font-inter font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="https://twitter.com/onestep"
            className="border border-white text-white font-inter font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition"
          >
            Follow Us on Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;