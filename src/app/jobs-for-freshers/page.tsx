import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JobsForFreshersPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Jobs for Freshers</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Entry-level jobs for recent graduates and freshers. Start your career with top companies and exciting roles.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Junior Software Engineer</b> — Work with experienced teams and grow your skills on real projects.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Business Analyst Trainee</b> — Analyze data, create reports, and support business decisions.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 