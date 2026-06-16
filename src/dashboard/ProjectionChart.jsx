import { useState, useEffect, useRef } from 'react'
import { getBarHeightPercent, formatNGN, formatUSD } from '../utils/projection'

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function Bar({ data, maxValue, index, activeMonth, onHover, onLeave }) {
  const [height, setHeight] = useState(0)
  const barRef = useRef(null)
  const containerRef = useRef(null)
  const pct = getBarHeightPercent(data.totalNGN, maxValue)
  const isActive = activeMonth === data.month

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight(pct)
    }, index * 60 + 100)
    return () => clearTimeout(timer)
  }, [pct, index])

  const getTooltipBottom = () => {
    if (!barRef.current || !containerRef.current) return `calc(${height}% + 8px)`
    const barRect = barRef.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()
    const distanceFromContainerBottom = containerRect.bottom - barRect.top
    return `${distanceFromContainerBottom + 8}px`
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-1 flex-1 min-w-0 group cursor-pointer"
      onMouseEnter={() => onHover(data.month)}
      onMouseLeave={onLeave}
      role="img"
      aria-label={`Month ${data.month}: ${formatUSD(data.totalUSD)} saved, ${formatNGN(data.totalNGN)} in Naira`}
    >
      {/* Tooltip */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-200 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ bottom: getTooltipBottom() }}
      >
        <div className="bg-secondary dark:bg-secondary-800 border border-secondary-700 dark:border-secondary-600 rounded-xl px-3 py-2 shadow-xl whitespace-nowrap">
          <p className="text-xs font-semibold text-white">{MONTH_LABELS[data.month - 1]}</p>
          <p className="text-xs text-primary font-bold">{formatNGN(data.totalNGN)}</p>
          <p className="text-xs text-gray-400">{formatUSD(data.totalUSD)} USD</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary dark:border-t-secondary-800" />
        </div>
      </div>

      {/* Bar track */}
      <div
        ref={containerRef}
        className="relative w-full flex flex-col justify-end"
        style={{ height: '160px' }}
      >
        <div
          ref={barRef}
          className={`w-full rounded-t-md transition-all duration-700 ease-out ${
            isActive
              ? 'bg-primary shadow-lg shadow-primary/30'
              : 'bg-primary/60 group-hover:bg-primary'
          }`}
          style={{ height: `${height}%` }}
        />
      </div>

      {/* Label */}
      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate w-full text-center">
        {MONTH_LABELS[data.month - 1]}
      </span>
    </div>
  )
}

export default function ProjectionChart({ projection, activeMonth, onHover, onLeave }) {
  if (!projection || projection.length === 0) return null

  const maxValue = projection[projection.length - 1].totalNGN

  return (
    <div
      className="w-full"
      role="figure"
      aria-label="12-month savings projection bar chart"
    >
      {/* Y-axis labels + bars */}
      <div className="flex gap-1 sm:gap-2 items-end w-full relative px-1">
        {projection.map((item, i) => (
          <div key={item.month} className="flex-1 relative flex flex-col items-center">
            <Bar
              data={item}
              maxValue={maxValue}
              index={i}
              activeMonth={activeMonth}
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        ))}
      </div>

      {/* X-axis base line */}
      <div className="h-px bg-gray-100 dark:bg-secondary-700 mt-1 mx-1" aria-hidden="true" />

      {/* Chart legend */}
      <div className="flex items-center gap-2 mt-3 justify-end">
        <div className="w-3 h-3 rounded-sm bg-primary" aria-hidden="true" />
        <span className="text-xs text-gray-400">Total NGN Value</span>
      </div>
    </div>
  )
}
