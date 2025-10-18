'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecruiterApplications, acceptJobApplication, rejectJobApplication, acceptInternshipApplication, rejectInternshipApplication } from "@/lib/api";

interface JobApplication {
  hashed_id: string;
  job: {
    job_title: string;
  };
  user: {
    full_name: string;
    email: string;
  };
  application_status: string;
}

interface InternshipApplication {
  hashed_id: string;
  internship: {
    internship_title: string;
  };
  user: {
    full_name: string;
    email: string;
  };
  application_status: string;
}

interface Applications {
  jobApplications: JobApplication[];
  internshipApplications: InternshipApplication[];
}

const RecruiterDashboardPage: React.FC = () => {
  const [applications, setApplications] = useState<Applications | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getRecruiterApplications();
        setApplications(data);
      } catch (e) {
        console.error(e);
        setError("Failed to fetch applications");
      }
    };

    fetchApplications();
  }, []);

  const handleAcceptJob = async (id: string) => {
    try {
      await acceptJobApplication(id);
      // Refresh applications
      const data = await getRecruiterApplications();
      setApplications(data);
    } catch (error) {
      console.error("Failed to accept job application", error);
    }
  };

  const handleRejectJob = async (id: string) => {
    try {
      await rejectJobApplication(id);
      // Refresh applications
      const data = await getRecruiterApplications();
      setApplications(data);
    } catch (error) {
      console.error("Failed to reject job application", error);
    }
  };

  const handleAcceptInternship = async (id: string) => {
    try {
      await acceptInternshipApplication(id);
      // Refresh applications
      const data = await getRecruiterApplications();
      setApplications(data);
    } catch (error) {
      console.error("Failed to accept internship application", error);
    }
  };

  const handleRejectInternship = async (id: string) => {
    try {
      await rejectInternshipApplication(id);
      // Refresh applications
      const data = await getRecruiterApplications();
      setApplications(data);
    } catch (error) {
      console.error("Failed to reject internship application", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!applications) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Recruiter Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Applicant</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.jobApplications.map((app) => (
                <tr key={app.hashed_id}>
                  <td>{app.job.job_title}</td>
                  <td>{app.user.full_name}</td>
                  <td>{app.user.email}</td>
                  <td>{app.application_status}</td>
                  <td>
                    {app.application_status === "IN_REVIEW" && (
                      <>
                        <Button onClick={() => handleAcceptJob(app.hashed_id)}>Accept</Button>
                        <Button onClick={() => handleRejectJob(app.hashed_id)}>Reject</Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Internship Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <table>
            <thead>
              <tr>
                <th>Internship Title</th>
                <th>Applicant</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.internshipApplications.map((app) => (
                <tr key={app.hashed_id}>
                  <td>{app.internship.internship_title}</td>
                  <td>{app.user.full_name}</td>
                  <td>{app.user.email}</td>
                  <td>{app.application_status}</td>
                  <td>
                    {app.application_status === "IN_REVIEW" && (
                      <>
                        <Button onClick={() => handleAcceptInternship(app.hashed_id)}>Accept</Button>
                        <Button onClick={() => handleRejectInternship(app.hashed_id)}>Reject</Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </main>
  );
};

export default RecruiterDashboardPage;
