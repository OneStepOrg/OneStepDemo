import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataAnalystCoursePage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', fontFamily: 'var(--font-geist-sans)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 18 }}>Become a Data Analyst</h1>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32 }}>
          Learn data analysis, visualization, and business intelligence tools. Prepare for a career as a data analyst.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 1:</b> Excel & Data Cleaning
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 2:</b> Data Visualization with Tableau
          </li>
          <li style={{ marginBottom: 18, background: '#fafafa', borderRadius: 8, padding: 18, border: '1px solid #eee' }}>
            <b>Module 3:</b> Python for Data Analysis
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
} 