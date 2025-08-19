import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareerTracksPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Structured Career Tracks</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Follow a guided path to your dream career. Each track includes curated resources, projects, and milestones.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Software Engineering Track</b> — From basics to advanced system design.
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Product Management Track</b> — Learn product thinking, roadmapping, and launch skills.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 