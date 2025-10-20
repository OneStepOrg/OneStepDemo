'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getListFilterOptions, getFilteredItems } from '@/lib/api';
import { FaUniversity } from 'react-icons/fa';

interface Course {
  id: string;
  hashed_id: string;
  course_name: string;
  provided_by: string;
  skill_level: string;
}

const CourseProvidersPage = () => {
  const [providers, setProviders] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loadingProviders, setLoadingProviders] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [errorProviders, setErrorProviders] = useState<string | null>(null);
  const [errorCourses, setErrorCourses] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const data = await getListFilterOptions("courses", "provided_by");
        setProviders(data);
      } catch (err) {
        setErrorProviders("Failed to fetch course providers");
        console.error(err);
      } finally {
        setLoadingProviders(false);
      }
    };
    fetchProviders();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingCourses(true);
      setErrorCourses(null);
      try {
        const filters: { providedBy?: string } = {};
        if (selectedProvider) {
          filters.providedBy = selectedProvider;
        }
        const data = await getFilteredItems("courses", filters);
        setCourses(data);
      } catch (err) {
        setErrorCourses("Failed to fetch courses");
        console.error(err);
      } finally {
        setLoadingCourses(false);
      }
    };
    fetchCourses();
  }, [selectedProvider]);

  const handleProviderClick = (provider: string) => {
    setSelectedProvider(provider === selectedProvider ? null : provider);
  };

  if (loadingProviders) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading providers...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (errorProviders) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-red-600 text-lg">Error: {errorProviders}</p>
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
            <FaUniversity className="text-gray-700" /> Browse Course Providers
          </h1>

          {/* Providers Banner */}
          <div className="mb-12 p-4 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Provider:</h2>
            <div className="flex flex-wrap gap-3">
              {providers.map((provider) => (
                <button
                  key={provider}
                  onClick={() => handleProviderClick(provider)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                             ${selectedProvider === provider
                               ? "bg-gray-800 text-white shadow-md"
                               : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}
                             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
                >
                  <FaUniversity className="mr-2" />
                  {provider}
                </button>
              ))}
              {selectedProvider && (
                <button
                  onClick={() => setSelectedProvider(null)}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>

          {/* Courses List */}
          <h2 className="text-2xl font-bold font-inter text-gray-900 mb-6">Available Courses {selectedProvider ? `from ${selectedProvider}` : ""}</h2>
          {loadingCourses ? (
            <p className="text-gray-700 text-lg text-center">Loading courses...</p>
          ) : errorCourses ? (
            <p className="text-red-600 text-lg text-center">Error: {errorCourses}</p>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.hashed_id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.course_name}</h3>
                  <p className="text-gray-600 mb-1"><strong>Provider:</strong> {course.provided_by}</p>
                  <p className="text-gray-600 mb-1"><strong>Skill Level:</strong> {course.skill_level}</p>
                  <Link href={`/courses/${course.hashed_id}`}
                    className="mt-4 inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    View Details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-lg text-center">No courses found {selectedProvider ? `from ${selectedProvider}` : ""}.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseProvidersPage;