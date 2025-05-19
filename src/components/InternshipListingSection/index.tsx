import React from 'react';

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
}

interface InternshipListingSectionProps {
  filteredInternships: Internship[];
}

const InternshipListingSection: React.FC<InternshipListingSectionProps> = ({ filteredInternships }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Internship Listings</h2>
      {filteredInternships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInternships.map(internship => (
            <div key={internship.id} className="border rounded-lg p-6 shadow-lg bg-card">
              <h3 className="text-xl font-bold mb-2 text-primary-foreground">{internship.title}</h3>
              <p className="text-muted-foreground mb-2">{internship.company} - {internship.location}</p>
              <p className="text-secondary-foreground mb-4">{internship.description}</p>
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-0.5 rounded">
                {internship.category}
              </span>
              {/* Add a link or button to view more details */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No internships found matching your criteria.</p>
      )}
    </div>
  );
};

export default InternshipListingSection;
