import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrendingRolesPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Trending Roles</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Explore the most in-demand job and internship roles in the market right now.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Data Scientist</b> — Analyze big data and build predictive models for top companies.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>UI/UX Designer</b> — Design user-friendly interfaces for web and mobile apps.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 