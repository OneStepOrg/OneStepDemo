'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBuilding } from 'react-icons/fa'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getListFilterOptions, getFilteredItems } from '@/lib/api';
import useEmblaCarousel from 'embla-carousel-react';

interface Job {
  id: string;
  job_title: string;
  company: string;
  job_location: string;
  job_time: string;
}

export default function JobsCompaniesPage(){
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const [companies, setCompanies] = useState<string[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [errorCompanies, setErrorCompanies] = useState<string | null>(null);
  const [errorJobs, setErrorJobs] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getListFilterOptions("jobs", "company");
        setCompanies(data);
      } catch (err) {
        setErrorCompanies("Failed to fetch companies");
        console.error(err);
      } finally {
        setLoadingCompanies(false);
      }
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      setErrorJobs(null);
      try {
        const filters: { company?: string } = {};
        if (selectedCompany) {
          filters.company = selectedCompany;
        }
        const data = await getFilteredItems("jobs", filters);
        setJobs(data);
      } catch (err) {
        setErrorJobs("Failed to fetch jobs");
        console.error(err);
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, [selectedCompany]);

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company === selectedCompany ? null : company);
  };

  if (loadingCompanies) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading companies...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (errorCompanies) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-red-600 text-lg">Error: {errorCompanies}</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <FaBuilding className="text-gray-700" /> Browse Job Companies
          </h1>

          {/* Companies Banner */}
          <div className="mb-12 p-4 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Company:</h2>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex">
                {companies.map((company) => (
                  <div key={company} className="embla__slide flex-none mx-2">
                    <button
                      onClick={() => handleCompanyClick(company)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                                 ${selectedCompany === company
                                   ? "bg-gray-800 text-white shadow-md"
                                   : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}
                                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
                    >
                      {company}
                    </button>
                  </div>
                ))}
                {selectedCompany && (
                  <div className="embla__slide flex-none mx-2">
                    <button
                      onClick={() => setSelectedCompany(null)}
                      className="px-5 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 whitespace-nowrap"
                    >
                      Clear Filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <h2 className="text-2xl font-bold font-inter text-gray-900 mb-6">Available Jobs {selectedCompany ? `from ${selectedCompany}` : ""}</h2>
          {loadingJobs ? (
            <p className="text-gray-700 text-lg text-center">Loading jobs...</p>
          ) : errorJobs ? (
            <p className="text-red-600 text-lg text-center">Error: {errorJobs}</p>
          ) : jobs.length > 0 ? (
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
            <p className="text-gray-700 text-lg text-center">No jobs found {selectedCompany ? `from ${selectedCompany}` : ""}.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
