'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInstructorCourses } from "@/lib/api";

interface Student {
  full_name: string;
  email: string;
}

interface Course {
  course_name: string;
  students: Student[];
}

const InstructorDashboardPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getInstructorCourses();
        setCourses(data);
      } catch (e) {
        console.error(e);
        setError("Failed to fetch courses");
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!courses) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Instructor Dashboard</h1>

      {courses.map((course, index) => (
        <Card key={index} className="mb-8">
          <CardHeader>
            <CardTitle>{course.course_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-4">Enrolled Students</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {course.students.map((student, studentIndex) => (
                  <tr key={studentIndex}>
                    <td>{student.full_name}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </main>
  );
};

export default InstructorDashboardPage;
