import { motion } from 'framer-motion'
import { HiTrendingUp, HiCurrencyDollar, HiCash, HiCalendar } from 'react-icons/hi'
import { formatNGN, formatUSD } from '../utils/projection'

function StatCard({ icon: Icon, label, value, highlight, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-2xl p-4 border ${
        highlight
          ? 'bg-primary border-primary/20 text-white'
          : 'bg-gray-50 dark:bg-secondary-700 border-gray-100 dark:border-secondary-600'
      }`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
        highlight ? 'bg-white/20' : 'bg-primary/10'
      }`}>
        <Icon className={`w-4 h-4 ${highlight ? 'text-white' : 'text-primary'}`} aria-hidden="true" />
      </div>
      <p className={`text-xs font-medium mb-1 ${highlight ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
        {label}
      </p>
      <p className={`text-lg font-display font-bold leading-tight ${highlight ? 'text-white' : 'text-secondary dark:text-white'}`}>
        {value}
      </p>
    </motion.div>
  )
}

export default function SummaryCard({ summary }) {
  if (!summary) return null

  const growthPercent = (((summary.totalUSD - summary.monthly) / summary.monthly) * 100).toFixed(0)

  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <StatCard
        icon={HiCalendar}
        label="Monthly Deposit"
        value={formatUSD(summary.monthly)}
        delay={0}
      />
      <StatCard
        icon={HiCurrencyDollar}
        label="12-Month USD Total"
        value={formatUSD(summary.totalUSD)}
        delay={0.1}
      />
      <StatCard
        icon={HiTrendingUp}
        label="Growth vs Month 1"
        value={`+${growthPercent}%`}
        delay={0.2}
      />
      <StatCard
        icon={HiCash}
        label="12-Month NGN Value"
        value={formatNGN(summary.totalNGN)}
        highlight
        delay={0.3}
      />
    </div>
  )
}
