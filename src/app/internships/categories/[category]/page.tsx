import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link';

const mockInternships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechNova',
    location: 'Remote',
    stipend: '₹10,000/mo',
    duration: '3 months',
    field: 'Web Development',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'MarketGenius',
    location: 'Bangalore',
    stipend: '₹8,000/mo',
    duration: '2 months',
    field: 'Marketing',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'DataWiz',
    location: 'Remote',
    stipend: '₹12,000/mo',
    duration: '6 months',
    field: 'Data Science',
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    company: 'Designify',
    location: 'Delhi',
    stipend: '₹7,000/mo',
    duration: '3 months',
    field: 'Design',
  },
  {
    id: 5,
    title: 'Business Analyst Intern',
    company: 'BizInsights',
    location: 'Mumbai',
    stipend: '₹9,000/mo',
    duration: '4 months',
    field: 'Business',
  },
];

function formatCategory(slug: string) {
  // Convert slug to title case (e.g., web-development => Web Development)
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
}

type Props = {
  params?: Promise<{ category: string }>
  searchParams?: Promise<Record<string, unknown>>
}

export default async function InternshipCategoryPage(props: Props) {
  const resolved = await props.params
  const category = resolved?.category ?? ''
  const categoryName = formatCategory(category);
  const internships = mockInternships.filter(i => i.field.toLowerCase().replace(/\s+/g, '-') === category);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold font-inter text-gray-900 mb-8 text-center">
            {categoryName} Internships
          </h1>
          {internships.length === 0 ? (
            <div className="text-center text-gray-500">No internships found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internships.map((internship) => (
                <div key={internship.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-gray-900">{internship.title}</h2>
                  <div className="text-gray-700 font-medium">{internship.company}</div>
                  <div className="text-gray-500">{internship.location}</div>
                  <div className="flex gap-4 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{internship.stipend}</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{internship.duration}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">{internship.field}</div>
                  <Link href={`/internships/${internship.id}`} className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition font-medium text-center">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 