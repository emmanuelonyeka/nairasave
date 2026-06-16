import { motion } from 'framer-motion'
import { formatNGN, formatUSD } from '../utils/projection'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function ProjectionTable({ projection, activeMonth, onHover, onLeave }) {
  if (!projection || projection.length === 0) return null

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-100 dark:border-secondary-700">
      <table
        className="w-full text-sm"
        role="table"
        aria-label="12-month savings projection table"
      >
        <thead>
          <tr className="bg-gray-50 dark:bg-secondary-700 border-b border-gray-100 dark:border-secondary-600">
            <th
              scope="col"
              className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Month
            </th>
            <th
              scope="col"
              className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              USD Saved
            </th>
            <th
              scope="col"
              className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              NGN Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 dark:divide-secondary-700">
          {projection.map((row, i) => {
            const isActive = activeMonth === row.month
            const isLast = i === projection.length - 1
            return (
              <motion.tr
                key={row.month}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onMouseEnter={() => onHover(row.month)}
                onMouseLeave={onLeave}
                className={`transition-colors duration-150 cursor-default ${
                  isActive
                    ? 'bg-primary/5 dark:bg-primary/10'
                    : isLast
                    ? 'bg-primary/5 dark:bg-primary/5'
                    : 'bg-white dark:bg-secondary-800 hover:bg-gray-50 dark:hover:bg-secondary-700'
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      isLast ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-secondary-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      {row.month}
                    </span>
                    <span className={`font-medium ${isLast ? 'text-primary' : 'text-secondary dark:text-white'}`}>
                      {MONTH_NAMES[row.month - 1]}
                    </span>
                    {isLast && (
                      <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                        Goal
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-secondary dark:text-white tabular-nums">
                  {formatUSD(row.totalUSD)}
                </td>
                <td className={`px-4 py-3 text-right font-bold tabular-nums ${
                  isLast ? 'text-primary' : 'text-secondary dark:text-white'
                }`}>
                  {formatNGN(row.totalNGN)}
                </td>
              </motion.tr>
            )
          })}
        </tbody>
        {/* Footer total row */}
        <tfoot>
          <tr className="bg-secondary dark:bg-secondary-700 border-t-2 border-primary/20">
            <td className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              12-Month Total
            </td>
            <td className="px-4 py-3 text-right font-bold text-white tabular-nums">
              {formatUSD(projection[projection.length - 1].totalUSD)}
            </td>
            <td className="px-4 py-3 text-right font-bold text-primary tabular-nums">
              {formatNGN(projection[projection.length - 1].totalNGN)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
