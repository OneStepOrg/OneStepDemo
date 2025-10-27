import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound(){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-2xl text-center py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">404 — Page not found</h1>
        <p className="text-gray-600 mb-6">We couldn&apos;t find the page you&apos;re looking for.</p>
        <Link href="/" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md">Go back home</Link>
      </main>
      <Footer />
    </>
  )
}
