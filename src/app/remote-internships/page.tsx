'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from 'react';
import { getFilteredItems } from '@/lib/api';
import { FaLaptopHouse } from 'react-icons/fa';
import Link from 'next/link';

interface Internship {
  id: string;
  internship_title: string;
  company: string;
  internship_location: string;
  work_mode: string;
}

export default function RemoteInternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const data = await getFilteredItems("internships", { workMode: "Remote" });
        setInternships(data);
      } catch (err) {
        setError("Failed to fetch remote internships");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading remote internships...</p>
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
            <FaLaptopHouse className="text-gray-700" /> Remote Internships
          </h1>
          <p className="text-lg font-inter text-gray-700 text-center mb-12">
            Discover remote internship opportunities that let you work from anywhere. Flexible, convenient, and perfect for students and freshers.
          </p>

          {internships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <div key={internship.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{internship.internship_title}</h3>
                  <p className="text-gray-600 mb-1"><strong>Company:</strong> {internship.company}</p>
                  <p className="text-gray-600 mb-1"><strong>Location:</strong> {internship.internship_location}</p>
                  <p className="text-gray-600"><strong>Work Mode:</strong> {internship.work_mode}</p>
                  <Link href={`/internships/${internship.id}`}
                    className="mt-4 inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    View Details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-lg text-center">No remote internships found at the moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}