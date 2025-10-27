import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function HireAmbassador(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Campus Ambassador Hiring</CardTitle>
            <CardDescription>Information about campus ambassador programs and how to apply.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
