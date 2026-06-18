import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './pages/Landingpage/Navbar'
import Hero from './pages/Landingpage/Hero'
import Trust from './pages/Landingpage/Trust'
import Features from './pages/Landingpage/Features'
import Calculator from './pages/Landingpage/Calculator'
import Benefits from './pages/Landingpage/Benefits'
import HowItWorks from './pages/Landingpage/HowItWorks'
import FAQ from './pages/Landingpage/FAQ'
import Waitlist from './pages/Landingpage/Waitlist'
import Footer from './pages/Landingpage/Footer'

import Dashboard from './pages/Dashboard/DashboardPage'

function LandingPage({ darkMode, setDarkMode }) {
  return (
    <>
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}