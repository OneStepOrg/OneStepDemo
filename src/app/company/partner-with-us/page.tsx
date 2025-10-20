import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function PartnerWithUs(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Partner With Us</CardTitle>
            <CardDescription>Partnership opportunities for companies and educational institutions.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
