'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import CoursesLayout from "@/layouts/CoursesLayout";
import JobSearchBar from "@/components/JobSearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getCourses } from "@/lib/api";

interface Course {
  hashed_id: string;
  course_name: string;
  category: string;
  course_description: string;
  skill_level: string;
  duration: string;
  mode: string;
  provided_by: string;
}

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
      setFilteredCourses(data);
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    let filtered = courses;

    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter((course) =>
        course.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (searchTitle) {
      filtered = filtered.filter((course) =>
        course.course_name.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [courses, categoryFilter, searchTitle]);

  const uniqueCategories = Array.from(new Set(courses.map((course) => course.category)));

  const handleSearch = (title: string) => {
    setSearchTitle(title);
  };

  return (
    <CoursesLayout>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Course</h1>
          <p className="text-lg mb-8">Explore thousands of courses to upgrade your skills</p>
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
          <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Link key={course.hashed_id} href={`/courses/${course.hashed_id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{course.course_name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{course.category}</p>
                      <p>{course.provided_by}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">No courses found.</p>
            )}
          </div>
        </section>
      </main>
    </CoursesLayout>
  );
};

export default CoursesPage;