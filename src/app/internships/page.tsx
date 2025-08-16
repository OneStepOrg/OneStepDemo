"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaBuilding, FaTags, FaClock } from "react-icons/fa";

import { featuredInternships } from '@/lib/mock-data';

export default function InternshipsHome() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Banner */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 mb-8 shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Find Your Dream Internship</h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-3 max-w-2xl">Discover top internships in tech, business, design, and more. Filter by location, company, or category and kickstart your career journey.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md font-semibold shadow-sm">Browse Internships</Link>
            <Link href="/internships/categories/software-development" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md font-semibold border border-gray-900">Explore Categories</Link>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="flex flex-wrap gap-4 mb-8 justify-center">
          <FilterCard icon={<FaMapMarkerAlt className="text-gray-700" />} title="By Location" links={[
            { label: 'Bangalore', href: '/internships/locations/bangalore' },
            { label: 'Mumbai', href: '/internships/locations/mumbai' },
            { label: 'Remote', href: '/internships/locations/remote' },
          ]} />
          <FilterCard icon={<FaBuilding className="text-gray-700" />} title="By Company" links={[
            { label: 'TechNova Solutions', href: '/internships/companies/technova-solutions' },
            { label: 'Finix', href: '/internships/companies/finix' },
            { label: 'GreenByte', href: '/internships/companies/greenbyte' },
          ]} />
          <FilterCard icon={<FaTags className="text-gray-700" />} title="By Category" links={[
            { label: 'Software Development', href: '/internships/categories/software-development' },
            { label: 'Marketing', href: '/internships/categories/marketing' },
            { label: 'Design', href: '/internships/categories/design' },
          ]} />
          <FilterCard icon={<FaClock className="text-gray-700" />} title="By Availability" links={[
            { label: 'Part-Time', href: '/internships/availability/part-time' },
            { label: 'Full-Time', href: '/internships/availability/full-time' },
            { label: 'Summer', href: '/internships/availability/summer' },
          ]} />
        </section>

        {/* Featured Internships */}
        <section id="featured">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Featured Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition">
                <Image src={item.logo} alt={item.company} width={44} height={44} className="rounded-md bg-gray-100 border border-gray-100" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.company}</p>
                </div>
                <div className="flex gap-2 mt-2 mb-2 flex-wrap">
                  <span className="bg-gray-50 text-gray-700 rounded-full px-3 py-1 text-sm flex items-center gap-2">{item.location}</span>
                  <span className="bg-gray-50 text-gray-700 rounded-full px-3 py-1 text-sm">{item.stipend}</span>
                </div>
                <div className="text-sm text-gray-500">Duration: {item.duration}</div>
                <Link href={`/internships/${item.id}`} className="mt-3 inline-block bg-gray-900 text-white text-center py-2 rounded-md font-semibold">View Details</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FilterCard({ icon, title, links }: { icon: React.ReactNode, title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 min-w-[160px] min-h-[88px] border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-semibold text-sm text-gray-900">{title}</span>
      </div>
      <ul className="p-0 m-0 list-none">
        {links.map(link => (
          <li key={link.href} className="mb-1">
            <Link href={link.href} className="text-sm text-gray-700 font-medium underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}