import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

import { sampleCourses as topRatedCourses } from '@/lib/mock-data';

const TopRatedCoursesPage = () => (
  <>
    <Header />
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
          Top-Rated Courses
        </h1>
        <ul className="grid gap-6">
          {topRatedCourses.map((course) => (
            <li key={course.id}>
              <Link href={`/courses/${course.id}`}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-lg font-medium text-gray-800 hover:text-primary border border-gray-200 hover:border-primary">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{course.title}</span>
                  <span className="text-sm text-gray-500">{course.provider}</span>
                  <span className="text-sm text-yellow-500">★ {course.rating}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default TopRatedCoursesPage; 