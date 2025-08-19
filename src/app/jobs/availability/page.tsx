import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaClock } from 'react-icons/fa'
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function JobsAvailabilityPage(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <div className="flex items-center gap-4">
              <FaClock className="text-gray-800" />
              <CardTitle>Jobs: Availability</CardTitle>
            </div>
            <CardDescription>Filter job opportunities by remote, in-person, part-time, or full-time.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
