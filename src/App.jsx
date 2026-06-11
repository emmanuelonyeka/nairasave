import { useState, useEffect } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Trust from './sections/Trust'
import Features from './sections/Features'
import Calculator from './sections/Calculator'
import Benefits from './sections/Benefits'
import HowItWorks from './sections/HowItWorks'
import FAQ from './sections/FAQ'
import Waitlist from './sections/Waitlist'
import Footer from './sections/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('nairasave-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('nairasave-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('nairasave-theme', 'light')
    }
  }, [darkMode])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-[100] font-semibold"
      >
        Skip to main content
      </a>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main id="main-content">
        <Hero />
        <Trust />
        <Features />
        <Calculator />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Waitlist />
      </main>

      <Footer />
    </>
  )
}
