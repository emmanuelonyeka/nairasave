import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiInformationCircle, HiX, HiSwitchVertical } from 'react-icons/hi'
import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'
import { USD_TO_NGN } from '../data'

function formatNGN(value) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatUSD(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export default function Calculator() {
  const [usdInput, setUsdInput] = useState('')
  const [focused, setFocused] = useState(false)
  const [calculating, setCalculating] = useState(false)
  const [displayAmount, setDisplayAmount] = useState(0)
  const [direction, setDirection] = useState('usd-to-ngn')
  const timerRef = useState(null)

  const isUsdToNgn = direction === 'usd-to-ngn'

  const handleSwitch = () => {
    setDirection(isUsdToNgn ? 'ngn-to-usd' : 'usd-to-ngn')
    setUsdInput('')
    setDisplayAmount(0)
    setCalculating(false)
    if (timerRef[0]) clearTimeout(timerRef[0])
  }

  const handleChange = useCallback((e) => {
    const raw = e.target.value
    if (/^\d*\.?\d{0,2}$/.test(raw) || raw === '') {
      setUsdInput(raw)
      if (timerRef[0]) clearTimeout(timerRef[0])
      if (raw !== '' && parseFloat(raw) > 0) {
        setCalculating(true)
        timerRef[0] = setTimeout(() => {
          const val = parseFloat(raw)
          setDirection(prev => {
            const converting = prev === 'usd-to-ngn'
            setDisplayAmount(converting ? val * USD_TO_NGN : val / USD_TO_NGN)
            return prev
          })
          setCalculating(false)
        }, 300)
      } else {
        setDisplayAmount(0)
        setCalculating(false)
      }
    }
  }, [])

  const usdAmount = parseFloat(usdInput) || 0
  const ngnAmount = displayAmount
  const hasValue = usdInput !== '' && usdAmount > 0

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/60 via-white to-primary-50/40 dark:from-secondary dark:via-secondary-800 dark:to-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Info */}
          <FadeUp className="min-w-0 w-full">
            <SectionLabel>Currency Calculator</SectionLabel>
            <h2
              id="calculator-heading"
              className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
            >
              See exactly what your{' '}
              <span className="gradient-text">savings are worth</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-full">
              Type any USD amount and instantly see its Naira equivalent at the current parallel market rate.
              No buttons. No waiting. Just clarity.
            </p>

            {/* Rate badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-2xl px-5 py-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">$</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Current Parallel Rate</p>
                <p className="font-display font-bold text-secondary dark:text-white">
                  1 USD = <span className="text-primary">₦1,550</span>
                </p>
              </div>
            </div>

            {/* Quick amounts */}
            <div className="mt-6">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                {isUsdToNgn ? 'Quick amounts' : 'Quick amounts (NGN)'}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {(isUsdToNgn
                ? [50, 100, 500, 1000, 5000]
                : [100000, 250000, 500000, 1000000, 5000000]
              ).map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    const raw = String(amt)
                    setUsdInput(raw)
                    if (timerRef[0]) clearTimeout(timerRef[0])
                    setCalculating(true)
                    timerRef[0] = setTimeout(() => {
                      setDisplayAmount(isUsdToNgn ? amt * USD_TO_NGN : amt / USD_TO_NGN)
                      setCalculating(false)
                    }, 300)
                  }}
                  aria-label={`Calculate ${amt}`}
                  className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
                    usdInput === String(amt)
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white dark:bg-secondary-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-secondary-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {isUsdToNgn
                    ? `$${amt.toLocaleString()}`
                    : amt >= 1000000
                      ? `₦${amt / 1000000}M`
                      : `₦${(amt / 1000).toLocaleString()}k`
                  }
                </button>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: Calculator widget */}
          <FadeUp delay={0.15} className="min-w-0 w-full">
            <div
              className="bg-white dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-2xl p-4 sm:p-6 shadow-xl card-shadow w-full min-w-0 overflow-hidden"
              role="region"
              aria-label="USD to Naira currency calculator"
            >
              <div key={direction}>
              {/* USD Input */}
              <div className="mb-4">
              <label
                  htmlFor="usd-input"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  {isUsdToNgn ? 'You save (USD)' : 'You have (NGN)'}
                </label>
                <div
                  className={`relative flex items-center bg-gray-50 dark:bg-secondary/60 border-2 rounded-xl transition-all duration-200 min-w-0 ${
                    focused
                      ? 'border-primary shadow-sm shadow-primary/10'
                      : 'border-gray-200 dark:border-secondary-700'
                  }`}
                >
                  <span
                    className="pl-4 text-xl font-bold text-gray-400 dark:text-gray-500 select-none"
                    aria-hidden="true"
                  >
                    {isUsdToNgn ? '$' : '₦'}
                  </span>
                  <input
                    id="usd-input"
                    type="number"
                    inputMode="decimal"
                    placeholder="0.00"
                    value={usdInput}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    min="0"
                    step="0.01"
                    aria-label="Enter USD amount to convert"
                    aria-describedby="calculator-result calculator-rate-info"
                    className="flex-1 px-2 py-3 bg-transparent text-lg font-bold text-secondary dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="pr-2 text-xs font-medium text-gray-400 dark:text-gray-500 flex-shrink-0">
                    {isUsdToNgn ? 'USD' : 'NGN'}
                  </span>
                  {usdInput && (
                    <button
                      onClick={() => {
                        setUsdInput('')
                        setDisplayAmount(0)
                        setCalculating(false)
                      }}
                      aria-label="Reset calculator"
                      className="mr-3 w-7 h-7 rounded-full bg-gray-100 dark:bg-secondary-700 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all duration-150 flex-shrink-0"
                    >
                      <HiX className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Switch direction button */}
              <div className="flex items-center justify-center my-4">
                <div className="flex-1 h-px bg-gray-100 dark:bg-secondary-700" />
                <motion.button
                  onClick={handleSwitch}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  aria-label="Switch conversion direction"
                  className="mx-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30 hover:bg-primary-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <HiSwitchVertical className="w-5 h-5" />
                </motion.button>
                <div className="flex-1 h-px bg-gray-100 dark:bg-secondary-700" />
              </div>

              {/* NGN Output */}
              <div
                id="calculator-result"
                className="bg-gradient-to-br from-gary-300 to-gray-500 dark:from-secondary-700 dark:to-secondary rounded-2xl p-6"
                aria-live="polite"
                aria-atomic="true"
              >
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  {isUsdToNgn ? 'Naira Equivalent' : 'Dollar Equivalent'}
                </p>
                <AnimatePresence mode="wait">
                  {calculating ? (
                    <motion.div
                      key="calculating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex gap-1">
                        {[0,1,2].map(i => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                      <p className="text-lg text-gray-400 font-medium">Calculating…</p>
                    </motion.div>
                  ) : hasValue ? (
                    <motion.div
                      key={ngnAmount}
                      initial={{ opacity: 0.6, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="text-2xl sm:text-4xl font-display font-extrabold text-gray-500 dark:text-white leading-tight">
                        {isUsdToNgn ? formatNGN(ngnAmount) : formatUSD(ngnAmount)}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        {isUsdToNgn
                          ? `${formatUSD(usdAmount)} × ₦${USD_TO_NGN.toLocaleString()} = ${formatNGN(ngnAmount)}`
                          : `${formatNGN(usdAmount)} ÷ ₦${USD_TO_NGN.toLocaleString()} = ${formatUSD(ngnAmount)}`
                        }
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-2xl sm:text-4xl font-display font-extrabold text-gray-600 dark:text-gray-500">
                        {isUsdToNgn ? '₦0.00' : '$0.00'}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Enter an amount above to see the conversion</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Rate info */}
              <p
                id="calculator-rate-info"
                className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400 mt-4"
              >
                <HiInformationCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-00" aria-hidden="true" />
                Rate: 1 USD = ₦{USD_TO_NGN.toLocaleString()} (parallel market, hardcoded for this demo).
                Actual rates update throughout the day in the live app.
              </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
