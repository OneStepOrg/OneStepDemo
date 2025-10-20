import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DigitalMarketingBootcampPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Digital Marketing Bootcamp</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Master digital marketing skills including SEO, social media, and paid advertising. Learn from industry experts and work on real campaigns.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 1:</b> SEO & Content Marketing
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 2:</b> Social Media Strategy
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 3:</b> Paid Ads & Analytics
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 