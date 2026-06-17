import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import FadeUp from '../components/FadeUp'
import Button from '../components/Button'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="py-20 lg:py-28 bg-gray-100 dark:bg-gradient-to-br from-secondary via-secondary-800 to-secondary relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Limited Early Access
          </span>

          <h2
            id="waitlist-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-gray-400 dark:text-white mb-4 leading-tight"
          >
            Ready to Start{' '}
            <span className="text-primary">Saving Smarter?</span>
          </h2>

          <p className="dark:text-gray-400  text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Join 2,400+ Nigerians on the waitlist. Early members get priority access and a 3-month fee waiver.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-8 max-w-sm mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
              >
                <HiCheckCircle className="w-9 h-9 text-white" aria-hidden="true" />
              </motion.div>
              <div className="text-center">
                <p className="text-xl font-display font-bold text-white mb-1">You're on the list!</p>
                <p className="dark:text-gray-400 text-secondary-700 text-sm leading-relaxed">
                  We'll notify <strong className="text-primary">{email}</strong> the moment we launch.
                </p>
              </div>
            </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                aria-label="Waitlist sign-up form"
              >
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    aria-describedby={error ? 'email-error' : undefined}
                    aria-invalid={error ? 'true' : 'false'}
                    className={`w-full px-4 py-3.5 rounded-xl bg-gray-50 text-secondary border placeholder-gray-400 dark:bg-white/10 dark:text-white dark:placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      error ? 'border-red-400' : 'border-gray-200 dark:border-white/10 focus:border-primary'
                    }`}
                  />
                  {error && (
                    <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5 text-left">
                      {error}
                    </p>
                  )}
                </div>
                <Button type="submit" size="md" className="whitespace-nowrap" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="flex gap-1">
                        {[0,1,2].map(i => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </span>
                      Joining...
                    </span>
                  ) : (
                    <>
                      Join Waitlist
                      <HiArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          {!submitted && (
            <p className="mt-4 text-xs text-secondary dark:text-gray-500">
              No spam. No credit card. Unsubscribe anytime.
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  )
}
