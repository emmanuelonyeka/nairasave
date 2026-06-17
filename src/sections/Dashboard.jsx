import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiLightBulb, HiX } from 'react-icons/hi'
import { useSavingsProjection } from '../hooks/useSavingsProjection'
import ProjectionChart from '../dashboard/ProjectionChart'
import ProjectionTable from '../dashboard/ProjectionTable'
import SummaryCard from '../dashboard/SummaryCard'
import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'

const QUICK_AMOUNTS = [50, 100, 200, 500, 1000]
const TABS = ['Chart', 'Table']

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Chart')
  const {
    rawInput,
    projection,
    insight,
    summary,
    isValid,
    activeMonth,
    setActiveMonth,
    handleInput,
    getErrorMessage,
  } = useSavingsProjection()

  const error = getErrorMessage()

  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-secondary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeUp className="text-center mb-12">
          <SectionLabel>Savings Dashboard</SectionLabel>
          <h2
            id="dashboard-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
          >
            Plan your{' '}
            <span className="gradient-text">savings growth</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Enter your monthly USD savings amount and see exactly how your wealth grows over 12 months — in both dollars and Naira.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left: Input panel */}
          <FadeUp className="lg:col-span-2">
            <div className="bg-white dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-2xl p-6 sticky top-24">
              <h3 className="font-display font-bold text-secondary dark:text-white mb-1">
                Monthly Savings
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                How much can you set aside each month in USD?
              </p>

              {/* Input */}
              <div className="mb-4">
                <label htmlFor="monthly-input" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Amount (USD)
                </label>
                <div className={`flex items-center bg-gray-50 dark:bg-secondary/60 border-2 rounded-xl transition-all duration-200 ${
                  error
                    ? 'border-red-400'
                    : rawInput && !error
                    ? 'border-primary shadow-sm shadow-primary/10'
                    : 'border-gray-200 dark:border-secondary-700'
                }`}>
                  <span className="pl-4 text-xl font-bold text-gray-400 dark:text-gray-500" aria-hidden="true">$</span>
                  <input
                    id="monthly-input"
                    type="number"
                    inputMode="decimal"
                    placeholder="0.00"
                    value={rawInput}
                    onChange={handleInput}
                    min="0"
                    step="0.01"
                    aria-label="Monthly savings amount in USD"
                    aria-describedby={error ? 'dashboard-error' : 'dashboard-hint'}
                    aria-invalid={error ? 'true' : 'false'}
                    className="flex-1 px-3 py-4 bg-transparent text-xl font-bold text-secondary dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="pr-3 text-xs font-medium text-gray-400 dark:text-gray-500 flex-shrink-0">USD/mo</span>
                </div>

                <AnimatePresence mode="wait">
                  {error ? (
                    <motion.p
                      key="error"
                      id="dashboard-error"
                      role="alert"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs text-red-500"
                    >
                      <HiX className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      {error}
                    </motion.p>
                  ) : (
                    <p id="dashboard-hint" className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      Rate: 1 USD = ₦1,550 · 12-month projection
                    </p>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick amounts */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Quick select</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        const syntheticEvent = { target: { value: String(amt) } }
                        handleInput(syntheticEvent)
                      }}
                      aria-label={`Set monthly savings to $${amt}`}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
                        rawInput === String(amt)
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white dark:bg-secondary-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-secondary-600 hover:border-primary hover:text-primary'
                      }`}
                    >
                      ${amt}/mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Insight panel */}
              <AnimatePresence>
                {insight && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4"
                  >
                    <div className="flex gap-3">
                      <HiLightBulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {insight}
                      </p>
                    </div>
                  </motion.div>
                )}

                {!isValid && !error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-50 dark:bg-secondary-700 border border-gray-100 dark:border-secondary-600 rounded-xl p-4 text-center"
                  >
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Enter a monthly savings amount to see your projected growth.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>

          {/* Right: Dashboard output */}
          <FadeUp delay={0.1} className="lg:col-span-3 min-w-0">
            <div className="bg-white dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-2xl p-5 sm:p-6">
              <AnimatePresence mode="wait">
                {isValid ? (
                  <motion.div
                    key="dashboard-active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Summary cards */}
                    <SummaryCard summary={summary} />

                    {/* Tab switcher */}
                    <div className="flex gap-1 bg-gray-100 dark:bg-secondary-700 rounded-xl p-1 mb-5" role="tablist">
                      {TABS.map((tab) => (
                        <button
                          key={tab}
                          role="tab"
                          aria-selected={activeTab === tab}
                          onClick={() => setActiveTab(tab)}
                          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                            activeTab === tab
                              ? 'bg-white dark:bg-secondary-800 text-secondary dark:text-white shadow-sm'
                              : 'text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-white'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab content */}
                    <AnimatePresence mode="wait">
                      {activeTab === 'Chart' ? (
                        <motion.div
                          key="chart"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ProjectionChart
                            projection={projection}
                            activeMonth={activeMonth}
                            onHover={setActiveMonth}
                            onLeave={() => setActiveMonth(null)}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="table"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ProjectionTable
                            projection={projection}
                            activeMonth={activeMonth}
                            onHover={setActiveMonth}
                            onLeave={() => setActiveMonth(null)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dashboard-empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl" aria-hidden="true">{error ? '⚠️' : '📈'}</span>
                    </div>
                    <p className="text-base font-semibold text-secondary dark:text-white mb-1">
                      {error ? 'Adjust your savings amount' : 'Enter an amount to see your savings grow'}
                    </p>
                    <p className="text-sm text-gray-400 max-w-xs">
                      {error ? error : 'Enter a monthly savings amount on the left to see your 12-month growth in USD and Naira.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
