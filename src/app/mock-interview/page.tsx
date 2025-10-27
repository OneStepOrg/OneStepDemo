import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function MockInterviewSingular(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Mock Interviews</CardTitle>
            <CardDescription>Schedule mock interviews and practice with mentors.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
