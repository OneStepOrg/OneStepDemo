import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function JobsLocationsPage(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-gray-800" />
              <CardTitle>Jobs: Locations</CardTitle>
            </div>
            <CardDescription>Search jobs by city, region, or remote opportunities.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
