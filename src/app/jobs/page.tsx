'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import JobsLayout from "@/layouts/JobsLayout";
import JobSearchBar from "@/components/JobSearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getJobs } from "@/lib/api";

interface Job {
  hashed_id: string;
  job_title: string;
  company: string;
  job_location: string;
  job_category: string;
}

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
      setFilteredJobs(data);
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter((job) =>
        job.job_category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (searchTitle) {
      filtered = filtered.filter((job) =>
        job.job_title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter((job) =>
        job.job_location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [jobs, categoryFilter, searchTitle, searchLocation]);

  const uniqueCategories = Array.from(new Set(jobs.map((job) => job.job_category)));

  const handleSearch = (title: string, location: string) => {
    setSearchTitle(title);
    setSearchLocation(location);
  };

  return (
    <JobsLayout>
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
              filteredJobs.map((job) => (
                <Link key={job.hashed_id} href={`/jobs/${job.hashed_id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{job.job_title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{job.company}</p>
                      <p>{job.job_location}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">No jobs found.</p>
            )}
          </div>
        </section>
      </main>
    </JobsLayout>
  );
};

export default JobsPage;