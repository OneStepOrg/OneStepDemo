import * as React from "react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Technology", icon: "/icons/tech.png" },
  { name: "Finance", icon: "/icons/finance.png" },
  { name: "Marketing", icon: "/icons/marketing.png" },
  { name: "Design", icon: "/icons/design.png" },
];

interface JobCategoriesProps {
  className?: string;
}

const JobCategories: React.FC<JobCategoriesProps> = ({ className }) => {
  return (
    <section className={cn("py-8", className)}>
      <h2 className="text-2xl font-bold mb-4 text-center">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-center border rounded-lg p-4 bg-white hover:bg-accent transition-colors"
          >
            <img src={category.icon} alt={`${category.name} icon`} className="h-8 w-8 mr-2" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;