"use client";
import { sampleJobs as mockJobs } from '@/lib/mock-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import Link from 'next/link';

const fields = [
  'All',
  'Web Development',
  'Marketing',
  'Data Science',
  'Design',
  'Business',
];

const JobsPortal = () => {
  const [search, setSearch] = useState('');
  const [field, setField] = useState('All');

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesField = field === 'All' || job.field === field;
    return matchesSearch && matchesField;
  });

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold font-inter text-gray-900 mb-8 text-center">
            Find Jobs
          </h1>
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <input
              type="text"
              placeholder="Search by title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {fields.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No jobs found.</div>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <div className="text-gray-700 font-medium">{job.company}</div>
                  <div className="text-gray-500">{job.location}</div>
                  <div className="flex gap-4 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{job.salary}</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">{job.field}</div>
                  <Link href={`/jobs/${job.id}`} className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition font-medium text-center">
                    View Details
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JobsPortal;