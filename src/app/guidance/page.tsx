import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GuidancePage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Mentorship / Guidance</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Connect with experienced mentors for career advice, interview prep, and personalized guidance. Book a session or browse our mentor directory.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>1:1 Mentorship</b> — Schedule a private session with an industry expert.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Group Guidance</b> — Join group Q&A and discussion sessions.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 