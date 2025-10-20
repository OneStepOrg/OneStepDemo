'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import InternshipsLayout from "@/layouts/InternshipsLayout";
import JobSearchBar from "@/components/JobSearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getInternships, getListFilterOptions, FilterParams } from "@/lib/api";

interface Internship {
  hashed_id: string;
  internship_title: string;
  company: string;
  internship_location: string;
  internship_type: string;
}

const InternshipsPage: React.FC = () => {
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [internshipTypeFilter, setInternshipTypeFilter] = useState<string>("");
  const [uniqueInternshipTypes, setUniqueInternshipTypes] = useState<string[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");

  useEffect(() => {
    const fetchInternshipTypes = async () => {
      const types = await getListFilterOptions('internships', 'internship_type');
      setUniqueInternshipTypes(types);
    };
    fetchInternshipTypes();
  }, []);

  useEffect(() => {
    const fetchInternships = async () => {
      const filters: FilterParams = {};
      if (internshipTypeFilter && internshipTypeFilter !== "all") {
        filters.internship_type = internshipTypeFilter;
      }
      if (searchTitle) {
        filters.title = searchTitle;
      }
      if (searchLocation) {
        filters.internship_location = searchLocation;
      }
      const data = await getInternships(filters);
      setFilteredInternships(data);
    };
    fetchInternships();
  }, [internshipTypeFilter, searchTitle, searchLocation]);

  const handleSearch = (title: string, location: string) => {
    setSearchTitle(title);
    setSearchLocation(location);
  };

  return (
    <InternshipsLayout>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Internship</h1>
          <p className="text-lg mb-8">Explore thousands of internship opportunities</p>
          <JobSearchBar onSearch={handleSearch} className="max-w-3xl mx-auto" />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4">Filter by Type</h2>
            <Label htmlFor="category-filter" className="block mb-1">
              Type
            </Label>
            <Select onValueChange={setInternshipTypeFilter} value={internshipTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {uniqueInternshipTypes.map((type, index) => (
                  <SelectItem key={`${type}-${index}`} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </aside>

        <section className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Featured Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship) => (
                <Link key={internship.hashed_id} href={`/internships/${internship.hashed_id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{internship.internship_title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{internship.company}</p>
                      <p>{internship.internship_location}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">No internships found.</p>
            )}
          </div>
        </section>
      </main>
    </InternshipsLayout>
  );
};

export default InternshipsPage;