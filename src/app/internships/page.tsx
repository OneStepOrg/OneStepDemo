"use client";

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