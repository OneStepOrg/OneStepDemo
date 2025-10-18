'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from 'react';
import { getFilteredItems } from '@/lib/api';
import { FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';

interface Job {
  id: string;
  job_title: string;
  company: string;
  job_location: string;
  job_time: string;
}

export default function JobsForFreshersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Assuming 'experience_required' filter exists in the API for jobs
        const data = await getFilteredItems("jobs", { experience_required: "0 years" }); // Assuming API expects string
        setJobs(data);
      } catch (err) {
        setError("Failed to fetch jobs for freshers");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading jobs...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <FaUserGraduate className="text-gray-700" /> Jobs for Freshers
          </h1>
          <p className="text-lg font-inter text-gray-700 text-center mb-12">
            Entry-level jobs for recent graduates and freshers. Start your career with top companies and exciting roles.
          </p>

          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.job_title}</h3>
                  <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
                  <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.job_location}</p>
                  <p className="text-gray-600"><strong>Job Time:</strong> {job.job_time}</p>
                  <Link href={`/jobs/${job.id}`}
                    className="mt-4 inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    View Details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-lg text-center">No jobs for freshers found at the moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}