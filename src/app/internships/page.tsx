"use client";
<<<<<<< HEAD
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaBuilding, FaTags, FaClock } from "react-icons/fa";

import { featuredInternships } from '@/lib/mock-data';

export default function InternshipsHome() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Banner */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 mb-8 shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Find Your Dream Internship</h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-3 max-w-2xl">Discover top internships in tech, business, design, and more. Filter by location, company, or category and kickstart your career journey.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md font-semibold shadow-sm">Browse Internships</Link>
            <Link href="/internships/categories/software-development" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md font-semibold border border-gray-900">Explore Categories</Link>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="flex flex-wrap gap-4 mb-8 justify-center">
          <FilterCard icon={<FaMapMarkerAlt className="text-gray-700" />} title="By Location" links={[
            { label: 'Bangalore', href: '/internships/locations/bangalore' },
            { label: 'Mumbai', href: '/internships/locations/mumbai' },
            { label: 'Remote', href: '/internships/locations/remote' },
          ]} />
          <FilterCard icon={<FaBuilding className="text-gray-700" />} title="By Company" links={[
            { label: 'TechNova Solutions', href: '/internships/companies/technova-solutions' },
            { label: 'Finix', href: '/internships/companies/finix' },
            { label: 'GreenByte', href: '/internships/companies/greenbyte' },
          ]} />
          <FilterCard icon={<FaTags className="text-gray-700" />} title="By Category" links={[
            { label: 'Software Development', href: '/internships/categories/software-development' },
            { label: 'Marketing', href: '/internships/categories/marketing' },
            { label: 'Design', href: '/internships/categories/design' },
          ]} />
          <FilterCard icon={<FaClock className="text-gray-700" />} title="By Availability" links={[
            { label: 'Part-Time', href: '/internships/availability/part-time' },
            { label: 'Full-Time', href: '/internships/availability/full-time' },
            { label: 'Summer', href: '/internships/availability/summer' },
          ]} />
        </section>

        {/* Featured Internships */}
        <section id="featured">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Featured Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition">
                <Image src={item.logo} alt={item.company} width={44} height={44} className="rounded-md bg-gray-100 border border-gray-100" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.company}</p>
                </div>
                <div className="flex gap-2 mt-2 mb-2 flex-wrap">
                  <span className="bg-gray-50 text-gray-700 rounded-full px-3 py-1 text-sm flex items-center gap-2">{item.location}</span>
                  <span className="bg-gray-50 text-gray-700 rounded-full px-3 py-1 text-sm">{item.stipend}</span>
                </div>
                <div className="text-sm text-gray-500">Duration: {item.duration}</div>
                <Link href={`/internships/${item.id}`} className="mt-3 inline-block bg-gray-900 text-white text-center py-2 rounded-md font-semibold">View Details</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FilterCard({ icon, title, links }: { icon: React.ReactNode, title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 min-w-[160px] min-h-[88px] border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-semibold text-sm text-gray-900">{title}</span>
      </div>
      <ul className="p-0 m-0 list-none">
        {links.map(link => (
          <li key={link.href} className="mb-1">
            <Link href={link.href} className="text-sm text-gray-700 font-medium underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
=======

import * as React from "react";
import { useState, useEffect } from "react";
import InternshipsLayout from "@/layouts/InternshipsLayout";
import JobSearchBar from "@/components/JobSearchBar";
import JobCard from "@/components/JobCard";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import JobCategories from "@/components/JobCategories";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    category: "Technology",
    description: "Work on cutting-edge technology projects.",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Facebook",
    location: "Menlo Park, CA",
    category: "Technology",
    description: "Analyze large datasets to extract insights.",
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "Apple",
    location: "Cupertino, CA",
    category: "Marketing",
    description: "Assist with marketing campaigns and strategies.",
  },
  {
    id: 4,
    title: "Graphic Design Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    category: "Design",
    description: "Create visual content for various platforms.",
  },
  {
    id: 5,
    title: "Financial Analyst Intern",
    company: "J.P. Morgan",
    location: "New York, NY",
    category: "Finance",
    description: "Support financial planning and analysis activities.",
  },
];

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");

  useEffect(() => {
    setJobs(sampleJobs);
    setFilteredJobs(sampleJobs);
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter((job) =>
        job.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (searchTitle) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [jobs, categoryFilter, searchTitle, searchLocation]);

  const uniqueCategories = Array.from(new Set(jobs.map((job) => job.category)));

  const handleSearch = (title: string, location: string) => {
    setSearchTitle(title);
    setSearchLocation(location);
  };

  return (
    <InternshipsLayout>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-lg mb-8">Explore millions of job opportunities across India and abroad</p>
          <JobSearchBar onSearch={handleSearch} className="max-w-3xl mx-auto" />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
            <Label htmlFor="category-filter" className="block mb-1">
              Category
            </Label>
            <Select onValueChange={setCategoryFilter} value={categoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((category, index) => (
                  <SelectItem key={`${category}-${index}`} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </aside>

        <section className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-muted-foreground">No jobs found.</p>
            )}
          </div>
        </section>
      </main>

      <JobCategories />
      <FeaturedCompanies />
    </InternshipsLayout>
  );
};

export default HomePage;
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
