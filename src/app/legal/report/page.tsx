import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReportIssuePage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Report an Issue</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Found a bug or problem? Let us know so we can fix it quickly.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Email:</b> support@onestep.com
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Describe the issue:</b> Please include steps to reproduce and screenshots if possible.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 