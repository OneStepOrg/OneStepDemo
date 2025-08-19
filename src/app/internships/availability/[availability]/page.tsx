import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaClock } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  // Typed as a Promise to match the generated PageProps which expects
  // `params?: Promise<SegmentParams>`
  params?: Promise<{ availability: string }>
  // Use a safe object shape instead of `any` to satisfy ESLint while remaining
  // compatible with `Promise<any>` expected by Next's generated types.
  searchParams?: Promise<Record<string, unknown>>
}

export default async function AvailabilityPage(props: Props) {
  // Accept params which may be a Promise (as some Next internals type it as a Promise).
  const resolvedParams = await props.params
  const availabilityType = (resolvedParams?.availability ?? '').replace(/-/g, ' ')
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="flex items-center gap-4">
            <FaClock size={28} className="text-gray-700" />
            <CardTitle className="text-lg sm:text-2xl">Internships: {availabilityType}</CardTitle>
          </CardHeader>
          <CardContent>
            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">About this Availability</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{availabilityType} internships offer flexible options for students and graduates. Find opportunities that fit your schedule and career goals.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Sample Internships</h2>
              <ul className="mt-3 space-y-3">
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100">
                  <div className="font-semibold text-gray-900">Frontend Developer Intern</div>
                  <div className="text-sm text-gray-600">TechNova Solutions • Remote</div>
                  <div className="text-xs text-gray-500 mt-1">Stipend: ₹15,000/month • Duration: 6 months</div>
                </li>
                <li className="bg-gray-50 rounded-md p-4 border border-gray-100">
                  <div className="font-semibold text-gray-900">UI/UX Design Intern</div>
                  <div className="text-sm text-gray-600">Finix • Mumbai</div>
                  <div className="text-xs text-gray-500 mt-1">Stipend: ₹12,000/month • Duration: 4 months</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">Filters & Calendar</h2>
              <div className="mt-3 bg-gray-100 h-20 rounded-md border border-gray-100 flex items-center justify-center text-sm text-gray-400">[Filters or calendar for {availabilityType} internships will be shown here]</div>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
} 