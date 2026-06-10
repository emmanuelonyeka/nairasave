import { motion } from 'framer-motion'
import { HiArrowRight, HiTrendingUp } from 'react-icons/hi'
import Button from '../components/Button'

// Sparkline mini-chart built purely with SVG
function MiniChart() {
  const points = [30, 45, 35, 60, 50, 72, 68, 85, 80, 95]
  const width = 200
  const height = 60
  const max = Math.max(...points)
  const min = Math.min(...points)
  const normalize = (v) => height - ((v - min) / (max - min)) * (height - 8) - 4

  const pathD = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width
      const y = normalize(p)
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  const fillD =
    pathD + ` L ${width} ${height} L 0 ${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-14" aria-hidden="true">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#chartGrad)" />
      <path d={pathD} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Progress bar segment
function ProgressBar({ label, pct, color }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-500 dark:text-gray-400">{label}</span>
        <span className="font-semibold text-secondary dark:text-white">{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-secondary-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

// The fintech dashboard card
function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl scale-90 translate-y-4" aria-hidden="true" />

      {/* Main card */}
      <div className="relative bg-white dark:bg-secondary-800 rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-secondary-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Savings</p>
            <div className="flex items-end gap-1.5 mt-0.5">
              <span className="text-2xl font-display font-bold text-secondary dark:text-white">$2,450.00</span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary-50 dark:bg-primary/10 px-2.5 py-1 rounded-full">
            <HiTrendingUp className="w-3.5 h-3.5" />
            +12.4%
          </span>
        </div>

        {/* NGN Equivalent */}
        <div className="bg-secondary dark:bg-secondary-700 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-400 mb-0.5">Naira Equivalent</p>
          <p className="text-lg font-display font-bold text-white">₦3,797,500</p>
          <p className="text-xs text-gray-400 mt-0.5">@ ₦1,550 / $1</p>
        </div>

        {/* Mini chart */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">6-Month Growth</p>
          <MiniChart />
        </div>

        {/* Savings goals */}
        <div className="space-y-2.5">
          <ProgressBar label="Emergency Fund" pct={78} color="bg-primary" />
          <ProgressBar label="Travel Goal" pct={45} color="bg-accent" />
          <ProgressBar label="Investment Fund" pct={29} color="bg-blue-400" />
        </div>

        {/* Status pills */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-secondary-700">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" aria-hidden="true" />
          <span className="text-xs text-gray-500 dark:text-gray-400">Live rates active</span>
          <span className="ml-auto text-xs font-semibold text-primary bg-primary-50 dark:bg-primary/10 px-2 py-0.5 rounded-full">
            Secure ✓
          </span>
        </div>
      </div>

      {/* Floating notification badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute -top-4 -right-4 bg-white dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-xl px-3 py-2 shadow-lg"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="text-base">🎉</span>
          <div>
            <p className="text-xs font-semibold text-secondary dark:text-white">Rate Updated</p>
            <p className="text-xs text-primary">₦1,550/$ now</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-secondary dark:via-secondary dark:to-secondary-800"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid dots pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#10B981" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" aria-hidden="true" />
              Now accepting early sign-ups
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-secondary dark:text-white leading-tight tracking-tight mb-4"
            >
              Save in Dollars.{' '}
              <span className="gradient-text">
                Grow Beyond
              </span>{' '}
              Inflation.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Protect your savings from Naira depreciation and track your wealth in real time.
              Built for Nigerians who refuse to watch their money shrink.
            </motion.p>

            {/* Benefit bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-2 mb-8 max-w-md mx-auto lg:mx-0 text-sm"
              aria-label="Key benefits"
            >
              {[
                '✓ Open your USD wallet in under 2 minutes',
                '✓ Earn up to 5% annual interest in USD',
                '✓ Withdraw to your Naira account in 24hrs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 font-medium text-left">
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col xs:flex-row sm:flex-row gap-3 justify-center lg:justify-start w-fit mx-auto lg:mx-0"
            >
              <Button
                size="lg"
                onClick={() => handleNavClick('#waitlist')}
                aria-label="Join the NairaSave waitlist"
              >
                Join Waitlist
                <HiArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavClick('#calculator')}
                aria-label="Go to the currency calculator"
              >
                See Calculator
              </Button>
            </motion.div>

            {/* Social proof count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <strong className="text-secondary dark:text-white">2,400+</strong> Nigerians already on the waitlist
            </motion.p>
          </div>

          {/* Right: Dashboard visual */}
          <div className="flex justify-center lg:justify-end">
            <DashboardCard />
          </div>
        </div>
      </div>
    </section>
  )
}
