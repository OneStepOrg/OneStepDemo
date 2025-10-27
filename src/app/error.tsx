"use client"
import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({ error, reset }: { error: Error, reset: () => void }){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 max-w-2xl text-center py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Something went wrong</h1>
        <p className="text-gray-600 mb-6">{error?.message ?? 'An unexpected error occurred.'}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => reset()} className="bg-gray-900 text-white px-4 py-2 rounded-md">Try again</button>
          <Link href="/" className="bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-200">Home</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
