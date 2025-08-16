"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function InternshipDetailPage() {
  const params = useParams();
  const id = (params?.id ?? "unknown") as string;

  // Sample data for demo
  const internship = {
    id: id,
    title: "Frontend Developer Intern",
    company: {
      name: "TechNova Solutions",
      logo: "https://ui-avatars.com/api/?name=TechNova&background=fff&color=222",
      description: "TechNova Solutions is a leading provider of innovative tech solutions, focusing on web and mobile development.",
      website: "https://technova.example.com",
      location: "Bangalore, India",
      contact: "hr@technova.example.com"
    },
    location: {
      city: "Bangalore",
      country: "India",
      address: "123, Innovation Park, Electronic City, Bangalore, 560100",
      map: "https://maps.google.com/?q=Electronic+City+Bangalore"
    },
    overview: "Join our dynamic frontend team to build modern, responsive web applications using React and TypeScript. You'll work closely with designers and backend engineers to deliver seamless user experiences.",
    requirements: [
      "Currently pursuing a Bachelor's degree in Computer Science or related field",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with React.js and TypeScript is a plus",
      "Good communication and teamwork skills",
      "Available for a 3-6 month internship"
    ],
    stipend: "₹15,000/month",
    duration: "6 months",
    applyBy: "2024-07-31",
    howToApply: "Send your resume and a short cover letter to hr@technova.example.com with the subject 'Frontend Developer Intern Application'. Shortlisted candidates will be contacted for an interview."
  };

  return (
    <main className="max-w-3xl mx-auto my-12 px-6">
      <Card>
        <CardContent>
          <div className="flex items-start gap-4">
            <Image src={internship.company.logo} alt={internship.company.name} width={72} height={72} className="rounded-lg bg-muted" />
            <div>
              <h1 className="text-2xl font-bold">{internship.title}</h1>
              <p className="text-sm text-muted-foreground"><b>{internship.company.name}</b> · {internship.location.city}, {internship.location.country}</p>
              <p className="text-xs text-muted-foreground">Internship ID: {internship.id}</p>
            </div>
          </div>
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-muted-foreground">{internship.overview}</p>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li><b>Stipend:</b> {internship.stipend}</li>
              <li><b>Duration:</b> {internship.duration}</li>
              <li><b>Apply By:</b> {internship.applyBy}</li>
            </ul>
          </section>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">About the Company</h3>
              <p className="text-muted-foreground mt-2">{internship.company.description}</p>
              <a href={internship.company.website} target="_blank" rel="noopener noreferrer" className="text-primary underline">Visit Company Website</a>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="mt-2"><b>Address:</b> {internship.location.address}</p>
              <a href={internship.location.map} target="_blank" rel="noopener noreferrer" className="text-primary underline">View on Google Maps</a>
            </div>
          </section>
          <section className="mt-6">
            <h2 className="font-semibold">Requirements</h2>
            <ul className="mt-2 list-disc list-inside text-muted-foreground">
              {internship.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="font-semibold">How to Apply</h2>
            <p className="mt-2 text-muted-foreground">{internship.howToApply}</p>
          </section>
        </CardContent>
        <CardFooter>
          <div className="w-full text-right">
            <a href={`mailto:${internship.company.contact}`} className="text-primary underline">Contact: {internship.company.contact}</a>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}