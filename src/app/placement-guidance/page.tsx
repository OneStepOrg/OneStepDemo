import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function PlacementGuidance(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Placement Guidance</CardTitle>
            <CardDescription>Guidance and resources to help students prepare for placements and interviews.</CardDescription>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
