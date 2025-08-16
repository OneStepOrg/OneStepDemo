import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-3xl py-10">
        <Card>
          <CardContent>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Roadmaps / Learning Tracks</h1>
            <p className="text-gray-600 mb-4">Explore structured learning paths for popular tech and business careers. Choose a track and follow step-by-step guidance to reach your goals.</p>
            <ul className="space-y-3">
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Full Stack Developer Roadmap</b> — Beginner to advanced web development, including React, Node.js, and databases.</li>
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Data Analyst Track</b> — Learn data analysis, visualization, and tools like Python, Excel, and Tableau.</li>
              <li className="bg-gray-50 rounded-md p-4 border border-gray-100"><b>Digital Marketing Bootcamp</b> — Master SEO, social media, and digital campaigns from scratch.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}