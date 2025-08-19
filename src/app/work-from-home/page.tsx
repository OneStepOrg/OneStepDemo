import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';

export default function WorkFromHomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-3xl py-10">
        <Card>
          <CardContent>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Work From Home Jobs</h1>
            <p className="text-gray-600 mb-4">Find jobs you can do from the comfort of your home. Flexible, remote opportunities for all backgrounds.</p>
            <ul className="space-y-3">
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Remote Customer Support</b> — Assist customers online for a global SaaS company.</li>
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Remote Data Entry</b> — Enter and manage data for a distributed team.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}