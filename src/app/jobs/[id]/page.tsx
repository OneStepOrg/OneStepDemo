"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import { useRouter } from 'next/navigation';

const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechNova',
    location: 'Remote',
    salary: '₹12-18 LPA',
    type: 'Full Time',
    field: 'Web Development',
    description: 'Join our engineering team to build scalable web applications using modern technologies. Collaborate with cross-functional teams and deliver high-quality code.'
  },
  {
    id: 2,
    title: 'Marketing Associate',
    company: 'MarketGenius',
    location: 'Bangalore',
    salary: '₹6-9 LPA',
    type: 'Full Time',
    field: 'Marketing',
    description: 'Plan and execute marketing campaigns, analyze market trends, and help grow our brand presence. Work with a dynamic team of marketers.'
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'DataWiz',
    location: 'Remote',
    salary: '₹10-15 LPA',
    type: 'Full Time',
    field: 'Data Science',
    description: 'Analyze large datasets, generate insights, and support data-driven decision making. Use Python, SQL, and visualization tools.'
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Delhi',
    salary: '₹7-12 LPA',
    type: 'Full Time',
    field: 'Design',
    description: 'Design intuitive user interfaces and engaging user experiences. Work closely with product and engineering teams.'
  },
  {
    id: 5,
    title: 'Business Analyst',
    company: 'BizInsights',
    location: 'Mumbai',
    salary: '₹8-13 LPA',
    type: 'Full Time',
    field: 'Business',
    description: 'Work with stakeholders to gather requirements, analyze business processes, and recommend improvements.'
  },
];

interface JobDetailsPageProps {
  params?: Promise<{ id: string }>
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  // params may be a Promise in some Next.js contexts; at runtime it's usually an object.
  const isParams = (p: unknown): p is { id: string } => typeof p === 'object' && p !== null && Object.prototype.hasOwnProperty.call(p, 'id')
  const id = isParams(params) ? params.id : undefined
  const job = mockJobs.find((j) => j.id === Number(id));
  const router = useRouter();

  if (!job) {
    return (
      <>
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center text-gray-500">Job not found.</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-6 max-w-2xl">
          <button
            className="mb-6 text-primary hover:underline font-medium"
            onClick={() => router.back()}
          >
            ← Back to Jobs
          </button>
          <div className="bg-white p-8 rounded-lg shadow flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <div className="text-lg text-gray-700 font-medium">{job.company}</div>
            <div className="flex gap-4 mt-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{job.salary}</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{job.location}</span>
            </div>
            <div className="mt-2 text-xs text-gray-400">{job.field}</div>
            <div className="mt-4 text-gray-800">{job.description}</div>
            <button className="mt-6 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition font-medium w-fit self-end">Apply Now</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 