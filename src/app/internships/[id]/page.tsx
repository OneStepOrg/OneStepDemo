'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import InternshipsLayout from "@/layouts/InternshipsLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { getInternshipById } from "@/lib/api";

interface Internship {
  hashed_id: string;
  internship_type: string;
  internship_title: string;
  internship_description: string;
  company: string;
  duration: number;
  stipend: number;
  internship_location: string;
  paid_unpaid: string;
  work_mode: string;
  application_end_date: string;
  no_of_positions: number;
  season: string;
}

const InternshipPage: React.FC = () => {
  const [internship, setInternship] = useState<Internship | null>(null);
  const params = useParams();
  const id = params ? params.id : null;

  useEffect(() => {
    if (id) {
      const fetchInternship = async () => {
        const data = await getInternshipById(id as string);
        setInternship(data);
      };
      fetchInternship();
    }
  }, [id]);

  if (!internship) {
    return (
      <InternshipsLayout>
        <main className="container mx-auto px-4 py-8 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Loading internship...</p>
        </main>
      </InternshipsLayout>
    );
  }

  return (
    <InternshipsLayout>
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{internship.internship_title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Type:</strong> {internship.internship_type}</p>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Description:</strong> {internship.internship_description}</p>
            <p><strong>Duration:</strong> {internship.duration} months</p>
            <p><strong>Stipend:</strong> {internship.stipend}</p>
            <p><strong>Location:</strong> {internship.internship_location}</p>
            <p><strong>Paid/Unpaid:</strong> {internship.paid_unpaid}</p>
            <p><strong>Work Mode:</strong> {internship.work_mode}</p>
            <p><strong>Application End Date:</strong> {new Date(internship.application_end_date).toLocaleDateString()}</p>
            <p><strong>Positions:</strong> {internship.no_of_positions}</p>
            <p><strong>Season:</strong> {internship.season}</p>
          </CardContent>
        </Card>
      </main>
    </InternshipsLayout>
  );
};

export default InternshipPage;