import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function HireInterns(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Hire Interns</CardTitle>
            <CardDescription>Information for companies looking to hire interns through OneStep.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
