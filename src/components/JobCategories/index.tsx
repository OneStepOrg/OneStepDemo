import Image from "next/image";

const JobCategories = () => {
  const categories = [
    { name: "Technology", icon: "/icons/tech.svg" },
    { name: "Marketing", icon: "/icons/marketing.svg" },
    { name: "Finance", icon: "/icons/finance.svg" },
    { name: "Design", icon: "/icons/design.svg" },
    { name: "Sales", icon: "/icons/sales.svg" },
    { name: "Engineering", icon: "/icons/engineering.svg" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <Image src={category.icon} alt={category.name} width={50} height={50} />
              <span className="mt-4 font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
