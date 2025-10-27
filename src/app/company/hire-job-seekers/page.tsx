import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function HireJobSeekers(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Hire Job Seekers</CardTitle>
            <CardDescription>Post job openings and discover qualified candidates.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
