import * as React from "react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Apple", logo: "/logos/apple.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
];

interface FeaturedCompaniesProps {
  className?: string;
}

const FeaturedCompanies: React.FC<FeaturedCompaniesProps> = ({ className }) => {
  return (
    <section className={cn("py-8", className)}>
      <h2 className="text-2xl font-bold mb-4 text-center">Top Companies Hiring</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center border rounded-lg p-4 bg-white"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-12 w-auto"
              onError={(e) => (e.currentTarget.src = "/logos/placeholder.png")} // Fallback image
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
