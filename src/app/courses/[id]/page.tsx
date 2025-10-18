'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import CoursesLayout from "@/layouts/CoursesLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCourseById } from "@/lib/api";

interface Course {
  hashed_id: string;
  course_name: string;
  category: string;
  course_description: string;
  skill_level: string;
  duration: string;
  mode: string;
  provided_by: string;
  certificate: string;
  url: string;
  cost: string;
  instructor: string;
  language: string;
}

const CoursePage: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const params = useParams();
  const id = params ? params.id : null;

  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        const data = await getCourseById(id as string);
        setCourse(data);
      };
      fetchCourse();
    }
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <CoursesLayout>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{course.course_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Description:</strong> {course.course_description}</p>
            <p><strong>Skill Level:</strong> {course.skill_level}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Mode:</strong> {course.mode}</p>
            <p><strong>Provider:</strong> {course.provided_by}</p>
            <p><strong>Certificate:</strong> {course.certificate}</p>
            <p><strong>Cost:</strong> {course.cost}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Language:</strong> {course.language}</p>
            <a href={course.url} target="_blank" rel="noopener noreferrer">Go to course</a>
            <Link href={`/courses/${id}/payment`}>
              <Button>Pay {course.cost}</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </CoursesLayout>
  );
};

export default CoursePage;