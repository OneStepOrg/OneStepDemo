import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MockInterviewsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Mock Interviews</h1>
            <p className="text-gray-600 mb-4">Practice with industry-aligned interview questions and get feedback from mentors.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-md p-4 border border-gray-100">Technical Interviews</div>
              <div className="bg-gray-50 rounded-md p-4 border border-gray-100">Behavioral Interviews</div>
              <div className="bg-gray-50 rounded-md p-4 border border-gray-100">System Design</div>
            </div>
      </main>
      <Footer />
    </>
  );
} 