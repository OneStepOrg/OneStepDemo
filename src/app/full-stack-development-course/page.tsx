import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FullStackDevelopmentCoursePage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Learn Full Stack Development</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Master web development from front-end to back-end. Build real-world projects using React, Node.js, and databases.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 1:</b> HTML, CSS, JavaScript Basics
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 2:</b> React & Modern Frontend
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 3:</b> Node.js, Express, and Databases
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 