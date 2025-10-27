import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function FAQPage(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Community Q&A / FAQ</CardTitle>
            <CardDescription>Frequently asked questions and community-driven answers.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
