import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12 px-6">
        <Card>
          <CardContent>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Have questions or need support? Reach out to our team and we&apos;ll get back to you soon.</CardDescription>
            <ul className="mt-6 space-y-4">
              <li className="bg-muted rounded-lg p-4 border border-muted-foreground/30"> <b>Email:</b> support@onestep.com</li>
              <li className="bg-muted rounded-lg p-4 border border-muted-foreground/30"> <b>Phone:</b> +91-12345-67890</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}