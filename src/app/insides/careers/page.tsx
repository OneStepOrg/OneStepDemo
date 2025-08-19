import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Careers @ OneStep</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Join our team and help shape the future of career development. Explore open positions and apply to be part of OneStep.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Frontend Engineer</b> — React, TypeScript, UI/UX
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Community Manager</b> — Engagement, Events, Social Media
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 