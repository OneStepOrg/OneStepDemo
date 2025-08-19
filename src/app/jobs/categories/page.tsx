import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function JobsCategoriesPage(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Jobs: Categories</CardTitle>
            <CardDescription>Explore job categories across engineering, design, marketing, data, and more.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
