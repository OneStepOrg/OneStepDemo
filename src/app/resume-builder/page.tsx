import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';

export default function ResumeBuilderPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-3xl py-10">
        <Card>
          <CardContent>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Resume Builder</h1>
            <p className="text-gray-600 mb-4">Create a professional resume in minutes. Choose a template, fill in your details, and download your resume instantly.</p>
            <ul className="space-y-3">
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Step 1:</b> Select a template</li>
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Step 2:</b> Enter your education, experience, and skills</li>
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Step 3:</b> Download as PDF</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}