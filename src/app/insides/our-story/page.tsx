import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>Learn how OneStep started, our journey so far, and the milestones we&apos;ve achieved in empowering students and job seekers.</CardDescription>
            <ul className="mt-6 space-y-4">
              <li className="bg-muted rounded-lg p-4 border border-muted-foreground/30"><b>Founded:</b> 2022 by a team of passionate educators and technologists.</li>
              <li className="bg-muted rounded-lg p-4 border border-muted-foreground/30"><b>Milestone:</b> 10,000+ students placed in internships and jobs.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}