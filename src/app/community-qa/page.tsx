import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityQAPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Community Q&amp;A</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Ask questions, share answers, and help others in the OneStep community. Browse popular topics or start a new discussion.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>How do I prepare for a technical interview?</b>
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>What are the best resources for learning React?</b>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 