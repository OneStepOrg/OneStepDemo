import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Certification Portal</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Earn industry-recognized certifications to boost your resume and career prospects.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Frontend Developer Certificate</b> — Validate your React and web development skills.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Data Analyst Certificate</b> — Prove your expertise in data analysis and visualization.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 