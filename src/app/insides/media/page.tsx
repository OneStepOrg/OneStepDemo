import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MediaPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Press / Media</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Find our latest press releases, media coverage, and brand assets. For media inquiries, contact us below.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Press Release:</b> OneStep launches new mentorship platform.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Media Kit:</b> Download our logo and brand guidelines.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 