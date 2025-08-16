import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RemoteInternshipsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Remote Internships</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Discover remote internship opportunities that let you work from anywhere. Flexible, convenient, and perfect for students and freshers.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Remote Software Developer Intern</b> — Collaborate with teams online and build real products from home.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Remote Content Writer</b> — Write blogs, articles, and social media posts for global brands.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 