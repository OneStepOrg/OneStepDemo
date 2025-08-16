import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function CompanyReviews(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Company Reviews</CardTitle>
            <CardDescription>Read and submit reviews about companies and internship employers.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
