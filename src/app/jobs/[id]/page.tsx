'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import JobsLayout from "@/layouts/JobsLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { getJobById } from "@/lib/api";

interface Job {
  hashed_id: string;
  job_title: string;
  company: string;
  job_role: string;
  job_description: string;
  experience_required: string;
  job_time: string;
  job_category: string;
  skills_required: string;
  job_location: string;
  work_type: string;
  salary: number;
  interview_type: string;
  application_end_date: string;
  education_required: string;
  sector: string;
}

const JobPage: React.FC = () => {
  const [job, setJob] = useState<Job | null>(null);
  const params = useParams();
  const id = params ? params.id : null;

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        const data = await getJobById(id as string);
        setJob(data);
      };
      fetchJob();
    }
  }, [id]);

  if (!job) {
    return (
      <JobsLayout>
        <main className="container mx-auto px-4 py-8 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading job...</p>
        </main>
      </JobsLayout>
    );
  }

  return (
    <JobsLayout>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{job.job_title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Role:</strong> {job.job_role}</p>
            <p><strong>Description:</strong> {job.job_description}</p>
            <p><strong>Experience:</strong> {job.experience_required}</p>
            <p><strong>Job Time:</strong> {job.job_time}</p>
            <p><strong>Category:</strong> {job.job_category}</p>
            <p><strong>Skills:</strong> {job.skills_required}</p>
            <p><strong>Location:</strong> {job.job_location}</p>
            <p><strong>Work Type:</strong> {job.work_type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Interview Type:</strong> {job.interview_type}</p>
            <p><strong>Application End Date:</strong> {new Date(job.application_end_date).toLocaleDateString()}</p>
            <p><strong>Education:</strong> {job.education_required}</p>
            <p><strong>Sector:</strong> {job.sector}</p>
          </CardContent>
        </Card>
      </main>
    </JobsLayout>
  );
};

export default JobPage;
