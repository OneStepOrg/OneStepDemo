'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getListFilterOptions, getFilteredItems } from '@/lib/api';
import { FaCalendarAlt } from 'react-icons/fa';


interface Internship {
  id: string;
  hashed_id: string;
  internship_title: string;
  company: string;
  internship_location: string;
  work_mode: string;
}

const InternshipAvailabilityPage = () => {
  
  const [availabilities, setAvailabilities] = useState<string[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loadingAvailabilities, setLoadingAvailabilities] = useState(true);
  const [loadingInternships, setLoadingInternships] = useState(true);
  const [errorAvailabilities, setErrorAvailabilities] = useState<string | null>(null);
  const [errorInternships, setErrorInternships] = useState<string | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const data = await getListFilterOptions("internships", "work_mode");
        setAvailabilities(data);
      } catch (err) {
        setErrorAvailabilities("Failed to fetch availabilities");
        console.error(err);
      } finally {
        setLoadingAvailabilities(false);
      }
    };
    fetchAvailabilities();
  }, []);

  useEffect(() => {
    const fetchInternships = async () => {
      setLoadingInternships(true);
      setErrorInternships(null);
      try {
        const filters: { workMode?: string } = {};
        if (selectedAvailability) {
          filters.workMode = selectedAvailability;
        }
        const data = await getFilteredItems("internships", filters);
        setInternships(data);
      } catch (err) {
        setErrorInternships("Failed to fetch internships");
        console.error(err);
      } finally {
        setLoadingInternships(false);
      }
    };
    fetchInternships();
  }, [selectedAvailability]);

  const handleAvailabilityClick = (availability: string) => {
    setSelectedAvailability(availability === selectedAvailability ? null : availability);
  };

  if (loadingAvailabilities) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading availabilities...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (errorAvailabilities) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-red-600 text-lg">Error: {errorAvailabilities}</p>
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
            <FaCalendarAlt className="text-gray-700" /> Browse Internship Availability
          </h1>

          {/* Availabilities Banner */}
          <div className="mb-12 p-4 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Availability:</h2>
            <div className="flex flex-wrap gap-3">
              {availabilities.map((avail) => (
                <button
                  key={avail}
                  onClick={() => handleAvailabilityClick(avail)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                             ${selectedAvailability === avail
                               ? "bg-gray-800 text-white shadow-md"
                               : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}
                             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
                >
                  <FaCalendarAlt className="mr-2" />
                  {avail}
                </button>
              ))}
              {selectedAvailability && (
                <button
                  onClick={() => setSelectedAvailability(null)}
                  className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>

          {/* Internships List */}
          <h2 className="text-2xl font-bold font-inter text-gray-900 mb-6">Available Internships {selectedAvailability ? `(${selectedAvailability})` : ""}</h2>
          {loadingInternships ? (
            <p className="text-gray-700 text-lg text-center">Loading internships...</p>
          ) : errorInternships ? (
            <p className="text-red-600 text-lg text-center">Error: {errorInternships}</p>
          ) : internships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <div key={internship.hashed_id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{internship.internship_title}</h3>
                  <p className="text-gray-600 mb-1"><strong>Company:</strong> {internship.company}</p>
                  <p className="text-gray-600 mb-1"><strong>Location:</strong> {internship.internship_location}</p>
                  <p className="text-gray-600"><strong>Work Mode:</strong> {internship.work_mode}</p>
                  <Link href={`/internships/${internship.hashed_id}`}
                    className="mt-4 inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    View Details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-lg text-center">No internships found {selectedAvailability ? `for ${selectedAvailability}` : ""}.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InternshipAvailabilityPage;