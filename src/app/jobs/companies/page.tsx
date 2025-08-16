import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBuilding } from 'react-icons/fa'
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function JobsCompaniesPage(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <div className="flex items-center gap-4">
              <FaBuilding className="text-gray-800" />
              <CardTitle>Jobs: Companies</CardTitle>
            </div>
            <CardDescription>Discover job openings from top employers and startups.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
