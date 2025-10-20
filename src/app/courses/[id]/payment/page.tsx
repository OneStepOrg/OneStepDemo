'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import CoursesLayout from "@/layouts/CoursesLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getCourseById, enrollCourse } from "@/lib/api";

interface Course {
  hashed_id: string;
  course_name: string;
  cost: string;
}

const PaymentPage: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [message, setMessage] = useState<string | null>(null);
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

  const handlePayment = async () => {
    if (id) {
      try {
        await enrollCourse(id as string);
        setMessage("Successfully enrolled in the course!");
      } catch (e) {
        console.error(e);
        setMessage("Failed to enroll in the course. Please try again.");
      }
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <CoursesLayout>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Enrollment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">You are about to enroll in the following course:</p>
            <h2 className="text-2xl font-bold mb-4">{course.course_name}</h2>
            <p className="text-lg mb-4">Price: {course.cost}</p>
            <Button onClick={handlePayment}>Pay Now</Button>
            {message && <p className="mt-4">{message}</p>}
          </CardContent>
        </Card>
      </main>
    </CoursesLayout>
  );
};

export default PaymentPage;