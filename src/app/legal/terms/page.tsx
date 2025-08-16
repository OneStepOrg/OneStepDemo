import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Terms of Use</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Please read our terms and conditions before using OneStep. By accessing our platform, you agree to these terms.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Usage:</b> Use the platform for lawful purposes only.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Content:</b> Do not copy or redistribute content without permission.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 