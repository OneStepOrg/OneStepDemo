"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobSearchBarProps {
  onSearch: (title: string, location: string) => void;
  className?: string;
}

const JobSearchBar: React.FC<JobSearchBarProps> = ({ onSearch, className }) => {
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSearch = () => {
    onSearch(title, location);
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center", className)}>
      <Input
        placeholder="Job title, keywords, or company"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <Input
        placeholder="City or state"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1"
      />
      <Button onClick={handleSearch} className="sm:w-auto">
        <SearchIcon className="mr-2 h-4 w-4" /> Find Jobs
      </Button>
    </div>
  );
};

export default JobSearchBar;