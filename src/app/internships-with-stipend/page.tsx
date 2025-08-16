import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InternshipsWithStipendPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Internships with Stipend</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Browse internships that offer a stipend. Get paid while you learn and gain valuable work experience.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Software Development Intern</b> — ₹15,000/month stipend, 6 months, TechNova Solutions.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Marketing Intern</b> — ₹10,000/month stipend, 3 months, GreenByte.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 