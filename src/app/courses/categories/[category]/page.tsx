import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link';

const mockCourses = [
  { id: 1, title: 'Full Stack Web Development', provider: 'Coursera', category: 'Web Development' },
  { id: 2, title: 'Data Science Specialization', provider: 'edX', category: 'Data Science' },
  { id: 3, title: 'Digital Marketing Masterclass', provider: 'Udemy', category: 'Marketing' },
  { id: 4, title: 'UI/UX Design Bootcamp', provider: 'Udacity', category: 'Design' },
  { id: 5, title: 'Business Analytics', provider: 'Coursera', category: 'Business' },
  { id: 6, title: 'Machine Learning', provider: 'Coursera', category: 'AI & Machine Learning' },
  { id: 7, title: 'Finance for Non-Finance', provider: 'LinkedIn Learning', category: 'Finance' },
];

function formatCategory(slug: string) {
  // Convert slug to title case (e.g., web-development => Web Development)
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
}

type Props = {
  params?: Promise<{ category: string }>
  searchParams?: Promise<Record<string, unknown>>
}

export default async function CourseCategoryPage(props: Props) {
  const resolved = await props.params
  const category = resolved?.category ?? ''
  const categoryName = formatCategory(category);
  const courses = mockCourses.filter(c => c.category.toLowerCase().replace(/\s+/g, '-') === category);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
            {categoryName} Courses
          </h1>
          {courses.length === 0 ? (
            <div className="text-center text-gray-500">No courses found in this category.</div>
          ) : (
            <div className="grid gap-6">
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}
                  className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-lg font-medium text-gray-800 hover:text-primary border border-gray-200 hover:border-primary">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">{course.title}</span>
                    <span className="text-sm text-gray-500">{course.provider}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 