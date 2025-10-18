import Image from "next/image";

const FeaturedCompanies = () => {
  const companies = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Facebook", logo: "/logos/facebook.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <Image src={company.logo} alt={company.name} width={100} height={50} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;