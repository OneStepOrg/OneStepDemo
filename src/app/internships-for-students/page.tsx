import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InternshipsForStudentsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Internships for Students</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Find internships designed specifically for students. Gain real-world experience, build your resume, and kickstart your career while you study.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Campus Ambassador Program</b> — Represent top companies at your college and develop leadership skills.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Summer Internship</b> — Work on live projects during your summer break and earn a stipend.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 