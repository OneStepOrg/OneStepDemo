import * as React from "react";
import { cn } from "@/lib/utils";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
}

interface JobCardProps {
  job: Job;
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, className }) => {
  return (
    <div
      className={cn(
        "border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white",
        className
      )}
    >
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-sm text-muted-foreground">{job.company}</p>
      <p className="text-sm">{job.location}</p>
      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{job.description}</p>
      <p className="text-xs text-muted-foreground mt-2">Category: {job.category}</p>
    </div>
  );
};

export default JobCard;