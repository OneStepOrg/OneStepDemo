'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getFilteredItems } from '@/lib/api';
import { FaStar } from 'react-icons/fa';

interface Course {
  id: string;
  course_name: string;
  provided_by: string;
  skill_level: string;
  rating: number;
}

const TopRatedCoursesPage = () => {
  const [topRatedCourses, setTopRatedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopRatedCourses = async () => {
      try {
        const data = await getFilteredItems("courses", { sortBy: "rating", order: "DESC" });
        setTopRatedCourses(data);
      } catch (err) {
        setError("Failed to fetch top-rated courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedCourses();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading top-rated courses...</p>
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
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <FaStar className="text-gray-700" /> Top-Rated Courses
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedCourses.map((course) => (
              <li key={course.id}>
                <Link href={`/courses/${course.id}`}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                             border border-gray-200 hover:border-gray-400 text-lg font-medium text-gray-800 hover:text-gray-900
                             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                  <span className="font-semibold text-xl mb-1">{course.course_name}</span>
                  <span className="text-sm text-gray-600 mb-2">{course.provided_by}</span>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < course.rating ? "text-gray-700" : "text-gray-300"} />
                    ))}
                    <span className="text-md text-gray-700 ml-1">({course.rating})</span>
                  </div>
                  <span className="mt-2 inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">View Details &rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TopRatedCoursesPage;